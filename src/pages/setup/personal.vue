<template>
   <form action="#">
        <div class="widgets vidget-page">
            <div class="widgets__wrapper vidget-page__wrapper">
                <div class="widgets__left feedback">
                    <div class="widgets__header vidget-page__head">
                        <div class="widgets__header-title vidget-page__title">
                            <img src="" alt="">
                            <h4>Виджет «важное сообщение»</h4>
                        </div>
                        <div class="widgets__switch">
                            <span>Режим просмотра</span>
                            <div class="widgets__switch-btn">
                                <input id="switchcheckbox" type="checkbox" class="hidden switchcheckbox" />
                                <label for="switchcheckbox" id="switch" class="switch"></label>
                            </div>
                        </div>
                    </div>
                    <div class="widgets__content">
                        <div class="widgets__content-wrapper">
                            <div class="widgets__content-title">
                                <img src="img/fire.png" alt="">
                                <h4>{firstname}, у нас для тебя спецпредложение!</h4>
                            </div>
                            <div class="widgets__content-personal">
                                <div class="widgets__content-avatar">
                                    <img src="img/photo.png" alt="">
                                </div>
                                <div class="widgets__content-text widgets__content-text_personal">
                                    <h4 class="title">Получи бесплатную консультацию!</h4>
                                    <p>Все просто - жми на кнопку ниже, оставь заявку и мы свяжемся с тобой
                                        в считанные
                                        секунды!</p>
                                    <button class="gen-btn">+ добавить</button>
                                </div>
                            </div>
                            <button class="widgets__content-add">+ Добавить подвал виджета</button>
                        </div>
                        <div class="widgets__save">
                            <button class="gen-btn">Сохранить</button>
                        </div>
                    </div>
                    <div class="widgets__footer">
                        <!-- <div class="widgets__save">
                            <button class="gen-btn">Сохранить</button>
                        </div> -->
                        <div class="widgets__rules">
                            <p>В виджетах запрещено размещение сторонней коммерческой и политической рекламы! Подробнее
                                в п.5.13.4.1.
                                <a href="#">правил ВКонтакте!</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="widgets__right">
                    <div class="form">
                        <h4 class="vidget-page__title">аудитория</h4>
                        <p>Настройте показ виджета на свою целевую аудиторию, чтобы получить больше кликов по виджету и повысить конверсию
                        </p>
                        <div class="form__items">
                            <div class="item">
                                <div class="item__title">
                                    <span>Пол</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group">
                                    <select name="" id="" class="select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Возраст</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="item__double">
                                    <div class="form-group">
                                        <select name="" id="" class="select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <select name="" id="" class="select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>День рождения</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="item__double item__double_radio">
                                    <label class="radio">
                                        <input type="radio" name="birth" class="radio__input">
                                        <span class="radio__custom"></span>
                                        <span class="radio__text">7 дней</span>
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="birth" class="radio__input">
                                        <span class="radio__custom"></span>
                                        <span class="radio__text">3 дня</span>
                                    </label>
                                    <label class="radio">
                                        <input type="radio" name="birth" class="radio__input">
                                        <span class="radio__custom"></span>
                                        <span class="radio__text">Сегодня</span>
                                    </label>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Семейное положение</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group">
                                    <select name="" id="" class="select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Город</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group">
                                    <select name="" id="" class="select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Устройство</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group">
                                    <select name="" id="" class="select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Состоит в сообществе</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group form-group_textarea">
                                    <textarea name="" id="" placeholder="Введите ID сообществ"></textarea>
                                    <span>Каждый номер с новой строки</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Не состоит в сообществе</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group form-group_textarea">
                                    <textarea name="" id="" placeholder="Введите ID сообществ"></textarea>
                                    <span>Каждый номер с новой строки</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>ID пользователей</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group form-group_textarea">
                                    <textarea name="" id="" placeholder="Введите ID сообществ"></textarea>
                                    <span>Каждый номер с новой строки</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Интересы второй половинки</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group form-group_textarea">
                                    <textarea name="" id="" placeholder="Введите ID сообществ"></textarea>
                                    <span>Каждый номер с новой строки</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Интересы пользователя</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group form-group_textarea">
                                    <textarea name="" id="" placeholder="Введите ID сообществ"></textarea>
                                    <span>Каждый номер с новой строки</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Имя пользователя</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group form-group_textarea">
                                    <textarea name="" id="" placeholder="Введите ID сообществ"></textarea>
                                    <span>Каждый номер с новой строки</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item__title">
                                    <span>Фамилия пользователя</span>
                                    <img src="img/lock.png" alt="">
                                </div>
                                <div class="form-group form-group_textarea">
                                    <textarea name="" id="" placeholder="Введите ID сообществ"></textarea>
                                    <span>Каждый номер с новой строки</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>