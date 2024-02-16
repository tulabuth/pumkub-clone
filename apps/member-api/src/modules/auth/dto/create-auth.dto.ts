import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({
        type: String,
        nullable: true,
        example: "tolabuth",
        description: "username & email"
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        type: String,
        nullable: true,
        example: "Tola@1111",
        description: "password"
    })
    @IsString()
    @IsNotEmpty()
    password: string;


    
}
