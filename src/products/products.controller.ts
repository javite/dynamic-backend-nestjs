import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req: any, @Body() createProductDto: CreateProductDto) {
    const user = req.user;
    return this.productsService.create(createProductDto, user);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const user = req.user;
    return this.productsService.update(+id, updateProductDto, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    return this.productsService.remove(+id, user);
  }
}
