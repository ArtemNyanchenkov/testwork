const catalog = {
    messages: [],
    url: 'https://raw.githubusercontent.com/ArtemNyanchenkov/test/main/JSON/catalog.json',
   

    init() {
        this.container = document.querySelector('#catalog');
        this._get(this.url)
        .then(messages => {
            this.messages = messages;
        })
        .then(() => {
            this._render();
            this._arrLenght();
            this._addEvents();
            this._showMess()
            
        })

        
    },
    _get(url) {
        return fetch(url).then(d => d.json()) 
    },
    
    _render() {
        let htmlStr = '';
        this.messages.forEach((message) => {
             htmlStr += `
                <div class="message bolt" id="mes" >
                    <h1 class="text">Заголовок сообщения</h1>
                    <p class="text">Автор сообщения: ${message.author}</p>
                    <p class="text">Дата и время: ${message.data}; ${message.time}</p>      
                    <p class="text">
                    Какой-то текст сообщения <br>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>
                    Voluptates laudantium voluptatem minus perspiciatis excepturi, aliquam nam nulla necessitatibus dolor! <br>
                    Voluptatum aliquid velit voluptates voluptatem sint eos nemo officia necessitatibus nobis.<br>
                    </p>
                    <button class="btn" >Прочитано</button>
                </div>
            `;
        });
        this.container.innerHTML = htmlStr;
    },
    _arrLenght(){
        var countmes = this.messages.length;
        document.querySelector('#colmes').innerHTML = countmes ;
        
    },

    _addEvents(){
        btns = document.querySelectorAll('.btn');
        btns.forEach((btn) =>{
            btn.addEventListener('click', () => {
                this.messages.splice(0,1);
                if(btn.parentNode.classList.contains('bolt')){
                    btn.parentNode.classList.remove('bolt');
                     document.querySelector('#colmes').innerHTML = this.messages.length
                                   
                    
                }
            })
        })
    },

    _showMess(){
        clac = document.querySelector('.vidj');
        cat = document.querySelector('.container');
        clac.addEventListener('click', () => {
            if(cat.classList.contains('hide')){
                cat.classList.remove('hide')
            }else{
                cat.classList.add('hide')
            }
        })
    },
    


      
}

catalog.init(); 












