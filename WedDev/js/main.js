$(function() {
	var button  = document.querySelector('.btn-menu')
	var nav     = document.querySelector('.header__nav')
function click() {
    if(nav.style.display !== 'none'){
        nav.style.display = 'none'
    }
    else{
        nav.style.display = 'flex'
    }
}


button.onclick = click

// Вот тут функция оптимизации резайса (троттлинг)
function a() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
};
a();
// Событие, сюда ваш код
window.addEventListener("optimizedResize", function() {
    testFunction(); // вызов той самой функции
});


// Функция, чтобы было удобно вызвать
function testFunction() {
    if (window.innerWidth > 480) {
        nav.style.display = 'flex'
    }
    else if (window.innerWidth < 480){
        nav.style.display = 'none'
    }
}

// Вызов функции, чтобы она срабатывала при загрузке
testFunction();
	// Custom JS





	//projects
	var 
	b_all 				= $('#w_all'),
	b_webdes 			= $('#w_webdes')
	b_ui 				= $('#w_ui'),
	b_moc				= $('#w_moc'),
	g_all 			 	= $('#all'),
	g_webdes			= $('#webdes')
	g_ui	 			= $('#ui'),
	g_moc	 			= $('#moc'),
	m_photos 	= [g_all, g_webdes, g_ui, g_moc],
	m_btns 		= [b_all, b_webdes, b_ui, b_moc];
	// циклы
	m_btns.forEach(btn => {
		btn.click(function(e){
			if (this.classList.contains("selected")){
			}
			else {
				m_btns.forEach(btn2 => {
					btn2.removeClass('selected');
					this.classList.add("selected");
                });
                // webdes
				if  			(event.target.id == 'w_webdes'){
					m_photos.forEach(photos => {
                        photos.removeClass('d-block');
                        photos.addClass('d-none')
                    });
                    g_webdes.removeClass('d-none')
					g_webdes.addClass('d-block')
					
				}
				// ui
				else if	 (event.target.id == 'w_ui'){
					m_photos.forEach(photos => {
						photos.removeClass('d-block');
                        photos.addClass('d-none')
					});
					g_ui.removeClass('d-none')
					g_ui.addClass('d-block')
				}
				// garden
				else if	 (event.target.id == 'w_moc'){
					m_photos.forEach(photos => {

						photos.removeClass('d-block');
                        photos.addClass('d-none')
					});
					g_moc.removeClass('d-none')
					g_moc.addClass('d-block')
				}
				// all
				else {
					m_photos.forEach(photos => {
						photos.removeClass('d-block');
                        photos.addClass('d-none')
                    });
                    g_all.removeClass('d-none')
					g_all.addClass('d-block')
				}
			}
	 	})
	});
});
