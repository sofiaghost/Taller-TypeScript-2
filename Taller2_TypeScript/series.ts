
export class Serie
{
    id: number;
    nombre: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

 
    constructor
    (id: number,
     nombre:string, 
     channel: string, 
     seasons: number,
     description: string,
     link: string,
     image: string )
    {
        this.id= id;
        this.nombre = nombre;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;  
    }
}