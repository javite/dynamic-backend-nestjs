import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, HttpException, HttpStatus} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Role } from 'src/enums/role.enum';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly usersService: UsersService
    ) {}

  @Post()
  @UseGuards(JWTAuthGuard)
  create(@Request() req: any, @Body() createProductDto: CreateProductDto) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.productsService.create(createProductDto, user);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
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
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.productsService.update(+id, updateProductDto, user);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.productsService.remove(+id, user);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }
}
