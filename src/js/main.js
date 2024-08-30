        // Добавляем обработчик события 'DOMContentLoaded' для обеспечения того, что DOM полностью загружен до выполнения кода
        document.addEventListener('DOMContentLoaded', () => {
            // Получаем все элементы с классом .faq-item
            const faqItems = document.querySelectorAll('.faq-item');
            
            // Выбираем кнопку закрытия
            const closeButton = document.querySelector('.close-button');        
            
            // Выбираем кнопку темы
            const themeButton = document.querySelector('.faq-icon-star');  
            
            // Переменная для хранения открытого элемента
            let openItem = null;

            // Итерируемся по всем элементам FAQ
            faqItems.forEach(item => {

                // Добавляем обработчик клика по вопросу FAQ
 //               item.querySelector('.faq-question').addEventListener('click', () => {
                item.addEventListener('click', () => {
                    // Проверяем, есть ли открытый элемент и он отличается от текущего
                    if (openItem && openItem !== item) {
                        // Убираем показанный класс у предыдущего открытого элемента
                        openItem.querySelector('.faq-answer').classList.remove('active');
                        openItem.querySelector('.faq-icon').classList.remove('active');
                    }
                    
                    // Тoggles показанного класса у ответа текущего элемента
                    item.querySelector('.faq-answer').classList.toggle('active');

                    // Переключаем поворот иконки
                    const icon = item.querySelector('.faq-icon');
                    icon.classList.toggle('active');
                    
                    // Обновляем переменную openItem
                    openItem = item.querySelector('.faq-answer').classList.contains('active') ? item : null;
                });

            });

            // Добавляем обработчик закрытия для кнопки закрытия
            closeButton.addEventListener('click', () => {
                console.log('remove faq-container');
                // Удаляем контейнер FAQ из DOM
                document.body.querySelector('.faq-container').remove();
            });

             // Смена темы светлая\темная
             themeButton.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                console.log('Change the visual theme');
            });           
            
        });