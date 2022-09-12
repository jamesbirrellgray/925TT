import { IsUrl, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  public url: string;
  public name: string;
  public height: string;
}
