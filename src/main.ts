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
            img.setAttribute('class','content')
            main?.appendChild(img);
        }  
    }

    class Video implements ContentMaker{
        constructor(readonly title:string,readonly url:string,readonly body:string){
            this.make(url);
        }
    
        make(url:string){
            const video = document.createElement('iframe');
            video.innerHTML='<iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            video.setAttribute('src',"https://www.youtube.com/embed/ov3NRyoIEQ4");
            video.setAttribute('class','content')
            main?.appendChild(video);
        }  
    }


    class Text implements ContentMaker{
        constructor(readonly title:string, readonly body:string){
            this.make(body);
        }
    
        make(body:string){
            const text = document.createElement('div');
            text.innerText=body;
            text.setAttribute('class','content')
            text.setAttribute('class','text')
            main?.appendChild(text);
        }  
    }




    const img=new Img('good img','https://picsum.photos/300/200','good');
    const vid=new Video('fun','fdf','seventeen');
    const text=new Text('hi','일단 글씨가 들어간다.');
    
    
    
}