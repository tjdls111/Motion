{
    const main=document.querySelector('main');

    type Content={
        title:string;
        url?:string;
        body:string;
    };
    
    interface ContentMaker{  
        title:string;
        url?:string;
        body:string;
    };
    
    
    
    
    class Img implements ContentMaker{
        constructor(readonly title:string,readonly url:string,readonly body:string){
            this.make(url);
        }
    
        make(url:string){
            const img = document.createElement('img');
            img.setAttribute('src',url);
            img.setAttribute
            main?.appendChild(img);
        }

       
    }

    const img=new Img('good img','https://picsum.photos/300/300','good');
 
    
    
    
    
}