import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  Length,
} from "class-validator";
// import "reflect-metadata";
export class User {
  @IsEmail()
  public email!: string;

  @IsNotEmpty()
  @Length(5, 10)
  public username!: string;

  @IsNotEmpty()
  @Length(8, 20)
  @IsStrongPassword() // This checks for strong passwords
  public password!: string;
}
