export interface UserModel{
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    
}


export class AlbumModel {
    albumType: string;
    artists: Artist[];
    externalUrls: ExternalUrls;
    id: string;
    images: Image[];
    releaseDate: string;
    modelObjectType: string;
    value: number;
    name: string;
  }
  type Image = {
    height: number;
    url: string;
    width: number;
  }
  type Artist = {
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }
  type ExternalUrls = {
    externalUrls: _ExternalUrls;
  }
  type _ExternalUrls = {

    spotify:string;
  }
  

