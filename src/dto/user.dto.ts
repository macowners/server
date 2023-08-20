import { IsArray, IsString } from 'class-validator'

export class UserDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly password: string

  @IsArray()
  readonly group: string[]
}
