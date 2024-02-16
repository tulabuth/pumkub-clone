import { ApiProperty } from "@nestjs/swagger";

export class ChangePasswordDto{
    @ApiProperty({
        type: String,
        nullable: true,
        description: "old password",
        example: 'Tola@1111',
    })
    oldPassword: string;

    @ApiProperty({
        type: String,
        nullable: true,
        description: "old password",
        example: 'Tola@2222',
    })
    newPassword: string;
}