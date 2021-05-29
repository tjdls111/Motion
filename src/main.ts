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
        body?:string;
    };


    class Img implements ContentMaker{
        constructor(readonly title:string,readonly url:string){
            this.make(title,url);
        }
    
        make(title:string,url:string){
            const con=document.createElement('div');
            con.innerHTML=`<h1>${title}</h1>`;
            con.setAttribute('class','content');

            const img = document.createElement('img');
            img.setAttribute('src',url);
            const delBtn=document.createElement('button');
            delBtn.setAttribute('class','delBtn');
            delBtn.innerText='Remove';
            
            con.appendChild(img);
            con.appendChild(delBtn);
            main?.appendChild(con);
        }  
    }

    class Video implements ContentMaker{
        constructor(readonly title:string,readonly url:string){
            this.make(title,url);
        }
    
        make(title:string,url:string){
            const con=document.createElement('div');
            con.innerHTML=`<h1>${title}</h1>`;
            con.setAttribute('class','content');

            const video = document.createElement('iframe');
            video.innerHTML='<iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            video.setAttribute('src',url);

            const delBtn=document.createElement('button');
            delBtn.setAttribute('class','delBtn');
            delBtn.innerText='Remove';
            
            con.appendChild(video);
            con.appendChild(delBtn);
            main?.appendChild(con);
        }  
    }


    class Text implements ContentMaker{
        constructor(readonly title:string, readonly body:string){
            this.make(title,body);
        }
    
        make(title:string,body:string){
            const con=document.createElement('div');  
            con.innerHTML=`<h1>${title}</h1>`;
            con.setAttribute('class','content text');
            
            const text=document.createElement('div');
            text.setAttribute('class','text');
            text.innerHTML=body;

            const delBtn=document.createElement('button');
            delBtn.setAttribute('class','delBtn');
            delBtn.innerText='Remove';
            
            con.appendChild(text);
            con.appendChild(delBtn);
            main?.appendChild(con);
        }  
    }


    class Todo implements ContentMaker{
        constructor(readonly title:string, readonly body:string){
            this.make(title,body);
        }
    
        make(title:string,body:string){
            const con=document.createElement('div');
            con.innerHTML=`<h1>${title}</h1>`;
            con.setAttribute('class','content');

            const todo = document.createElement('div');
            todo.innerHTML=`<label class='text'><input type="checkbox" value="${body}"> ${body}</label>`;
            todo.setAttribute('class','content text');

            const delBtn=document.createElement('button');
            delBtn.setAttribute('class','delBtn');
            delBtn.innerText='Remove';
            
            con.appendChild(todo);
            con.appendChild(delBtn);
            main?.appendChild(con);
        }  
    }

   
 
    const addPopup= function (type:string){
        const popup=document.createElement('div');
        popup.setAttribute('class','popup');
        popup.innerHTML=`Title <br> <input type="text" id="title" size="40"> <br><br><br> Body/URL <br> <input type="text" class='UB' size='40'>
        <br><br><button name="button" class='btn'>Add</button>`;
        main?.appendChild(popup);

        
        const addBtn=document.querySelector('.btn');
        addBtn?.addEventListener('click',(event)=>{            
            const t=document.querySelector('#title').value;
            const UB=document.querySelector('.UB').value;
            console.log(t,UB);

            switch(type){
                case 'image':        
                    const img=new Img(t,UB);
                    break;
                case 'video':
                    const vid=new Video(t,UB);
                    break;
                case 'note':
                    const text=new Text(t,UB);
                    break;
                case 'task':
                    const todo=new Todo(t,UB);
                    break;
                default:
                    throw new Error('not valid type');
            }
            main?.removeChild(popup); 
        }); 
    }    
   
    
    const nav=document.querySelector('nav');

    nav?.addEventListener('click',(event)=>{
        const menu:string=event.target.classList[1];
        addPopup(menu);
       
    });

    main?.addEventListener('click',(event)=>{
        console.log(event);
        if (event.target.className=='delBtn'){
            console.log('remove');
            console.log(event.target.parentElement);
            
            main.removeChild(event.target.parentElement);  
        }

        
    });

}  