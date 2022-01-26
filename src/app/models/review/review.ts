export class Review {
    id:number;
    name: string;
    rating: number;
    commentaire: string;

    constructor(id=0, name='', rating=0, commentaire=''){
        this.id=id;
this.name=name;
this.rating=rating;
this.commentaire=commentaire;

    }
}
