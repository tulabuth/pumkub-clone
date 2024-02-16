import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegisterDto {
    @ApiProperty({
        type: String,
        nullable: true,
        example: "tolabuth"
    })
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({
        type: String,
        nullable: true,
        example: "tolabuth7@gmail.com"
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        nullable: true,
        example: "0653876641"
    })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({
        type: String,
        nullable: true,
        example: "Tola@1111"
    })
    @IsString()
    @IsNotEmpty()
    password: string;

}
