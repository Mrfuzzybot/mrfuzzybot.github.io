# StartKit for Scss
## Особенности
- Cборка предназначена для автоматизации задач в повседневной front-end разработке
- Основой для данной сборки является [BEM](https://ru.bem.info "BEM") методология
- Поддержка [npm](https://www.npmjs.com "npm") и [yarn](https://yarnpkg.com/ru/ "yarn")
- Используется препроцессор [Scss](https://sass-scss.ru "Scss")
- Встроенная сетка для адаптивной вёрстки [Smart-Grid](https://github.com/dmitry-lavrik/smart-grid "Smart-Grid")
- Версия для **Stylus**: [StartKit-Stylus](https://github.com/getcreate/StartKit-Stylus "StartKit-Stylus")
- Версия для **Less**: [StartKit-Less](https://github.com/getcreate/StartKit-Less "StartKit-Less")

## Установка
* **Установка для NPM:**
1. Скачайте и установите [Node.js](https://nodejs.org/en/ "Node.js") последней версии

2. Установите [Gulp](https://gulpjs.com "Gulp") глобально:
    ```
	npm i gulp-cli -g
	```

3. Установите [Bower](https://bower.io "Bower") глобально:
    ```
	npm i bower -g
	```
	
4. Установите все зависимости:
    ```
	npm i
	```
	
5. Запустите gulp:
	```
	gulp
	```

------------

* **Установка для Yarn:**
1. Скачайте и установите [Yarn](https://yarnpkg.com/ru/ "Yarn") последней версии

2. Установите [Gulp](https://gulpjs.com "Gulp") глобально:
    ```
	yarn global add gulp-cli
	```

3. Установите [Bower](https://bower.io "Bower") глобально:
    ```
	yarn global add bower
	```
	
4. Установите все зависимости:
    ```
	yarn
	```
	
5. Запустите gulp:
	```
	gulp
	```
	
## Файловая структура
```
StartKit-Scss
├── gulp
├── public_html
├── resources
├── source
│   ├── blocks
│   │   ├── components
│   │   └── modules
│   ├── fonts
│   ├── pages
│   ├── images
│   │   ├── content
│   │   └── svg
│   ├── scripts
│   │   ├── library
│   │   └── main.js
│   └── styles
├── .bowerrc
├── .csscomb.json
├── .browserslistrc
├── .gitignore
├── bower.json
├── gulpfile.js
├── LICENSEREADME
├── package.json
└── README
```

- `gulp`  - Содержит файлы для работы Gulp **(редактировать не желательно)**.

- `public_html`  - Папка для хранения собранного проекта

- `resources`  - В данной папке складываются все исходные файлы (psd, fonts, images, etc).

- `source`  -  В данной папке ведётся разработка проекта
	- `blocks`  -  Папка для хранения БЭМ блоков.
	
	 - `components`  - Папка для хранения ваших компонентов. Все стили подключаются в **components.scss**, а сами компоненты подключаются в **components.pug** (В данной папке хранятся файлы: **.scss**, **.pug**, **.js**)
	 
 	 - `modules`  - Папка для хранения ваших модулей (секций) сайта. Все стили подключаются в **modules.scss** (В данной папке хранятся файлы: **.scss**, **.pug**, **.js**, **.json**).
	 
- `fonts` - Папка для хранения ваших шрифтов **(предпочтительно хранить расширения woff и woff2)**.

- `pages` - Папка для хранения страниц (index.pug, about.pug, etc.).

- `images` - Папка для хранения изображений.

	- `content` - Папка для хранения изображений относящихся к контенту.
	
	- `svg` - Папка для хранения SVG иконок, который в дальнейшем будут собраны в спрайт.
	
- `scripts` - Папка для хранения JavaScript файлов.

	- `library` - Папка для хранения JavaScript библиотек, которые добавляются после загрузки через **Bower**.
	
	- `main.js` - Главный файл js куда подключаются все JavaScript файлы.

- `styles` - Папка для хранения файлов **.scss** .

- `.bowerrc` - Используется для определения конфигурации **Bower**, задания путей для сохранения библиотек в вашем проекте.

- `.csscomb.json` - CSScomb — утилита для сортировки CSS-свойств в рамках каждого селектора по заданному порядку.

- `.browserslistrc` - Содержит настройки для работы плагина Autoprefixer.

- `.gitignore` - Cлужит для указания в нём файлов и папок, которые необходимо скрыть от системы контроля версий git.

- `bower.json` - Содержит список библиотек используемых в проекте.

- `gulpfile.js` - Основной файл для работы Gulp.

- `package.json` - Содержит список пакетов (плагинов) необходимых для работы Gulp.

## Контакты
Если возникли **вопросы** или есть **предложения** по улучшению данной сборки, то вы можете связаться со мной:
- ВКонтакте: [@GetCreate](https://vk.com/getcreate "@GetCreate")
- Telegram: [@GetCreate](https://t-do.ru/GetCreate "@getcreate")