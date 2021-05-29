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
            img.setAttribute('class','content');
            main?.appendChild(img);
        }  
    }

    class Video implements ContentMaker{
        constructor(readonly title:string,readonly url:string,readonly body:string){
            this.make(title,url);
        }
    
        make(title:string,url:string){
            const con=document.createElement('div');
            con.innerHTML=`<h1>${title}</h1>`;
            con.setAttribute('class','content');

            const video = document.createElement('iframe');
            video.innerHTML='<iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            video.setAttribute('src',"https://www.youtube.com/embed/ov3NRyoIEQ4");
            

            con.appendChild(video);
            main?.appendChild(con);
        }  
    }


    class Text implements ContentMaker{
        constructor(readonly title:string, readonly body:string){
            this.make(title,body);
        }
    
        make(title:string,body:string){
            const text=document.createElement('div');
            text.setAttribute('class','content text');
            text.innerHTML=`<h1>${title}</h1>${body}`;

            main?.appendChild(text);
        }  
    }


    class Todo implements ContentMaker{
        constructor(readonly title:string, readonly body:string){
            this.make(body);
        }
    
        make(body:string){
            const todo = document.createElement('div');
            todo.innerHTML=`<label class='text'><input type="checkbox" value="${body}"> ${body}</label>`;
            todo.setAttribute('class','content text');
            main?.appendChild(todo);
        }  
    }

 
    const addPopup= function (type:string){
        const popup=document.createElement('div');
        popup.setAttribute('class','popup');
        popup.innerHTML=`Title <br> <input type="text" id="name" name="name" size="40"> <br><br><br> Body/URL <br> <input type="text" id="name" name="name" size='40'>
        <br><br><button name="button" class='btn'>Add</button>`;
        main?.appendChild(popup);

        
    }    


   
    
    const nav=document.querySelector('nav');
    nav?.addEventListener('click',(event)=>{
        const menu:string=event.target.classList[1];
        switch(menu){
            case 'image':
                addPopup('image');
                const img=new Img('good img','https://picsum.photos/300/200','good');
                break;
            case 'video':
                const vid=new Video('fun','fdf','seventeen');
                break;
            case 'note':
                const text=new Text('hi','일단 글씨가 들어간다.');
                break;
            case 'task':
                const todo=new Todo('hi','할일~~');
                break;

        }
        
    });

}