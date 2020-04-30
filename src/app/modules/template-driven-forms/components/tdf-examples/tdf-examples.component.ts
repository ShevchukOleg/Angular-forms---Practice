import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, Post } from '../../interfaces';

@Component({
  selector: 'app-tdf-examples',
  templateUrl: './tdf-examples.component.html',
  styleUrls: ['./tdf-examples.component.css']
})
export class TdfExamplesComponent implements OnInit {

  constructor() { }
  /**
   * філд що описує варіанти посал для першої форми
   */
  posts = ['PM', 'QA', 'BA', 'WD'];

  /**
   * Перша форма вимагає щоб об'єкт прив'язки існував у момент ініціалізації шаблону,
   * тому створюється зразок класу User
   */
  model: User;
  /**
   * Друга форма не вимагає прив'язки до властивомтей компоненти і ініціює створення об'єкту при сабміті,
   * дані записуються в заздалегідь підготовлене поле
   */
  secondFormObject: Post;

  submitted = false;

  /**
   * при старті компоненти ініціалізуєься об'єкт початкового стану форми
   */
  ngOnInit(): void {
    this.model = new User(18, 'Dr Qrye', this.posts[0], 'Chuck Overstreet');
  }
  /**
   * обробник сабміту першої форми
   * @param form - шаблонна змінна що посилається на ngForm
   */
  onSubmitHandler(form: NgForm) {
    this.submitted = true;
    console.log(this.model, form);
  }
  /**
   * обробник сабміту другої форми
   * @param templateForm - шаблонна змінна що посилається на ngForm
   */
  onSubmit2(templateForm: NgForm) {
    this.secondFormObject = new Post(templateForm.form.value.title, templateForm.value.text);
    console.log(this.secondFormObject);
  }
  /**
   * метод очистки моделі стану першої форми
   */
  clearModel() {
    this.model = new User(0, '', '', '');
  }
  /**
   * метод перевірки стану валідаціх поля форми
   * @param errors - аомилки валідації
   */
  chackErrors(errors: { [key: string]: { [key: string]: string } }) {
    console.log(errors);
  }
  /**
   * акцесор консолідованих данних першої форми
   */
  get diagnostic() { return JSON.stringify(this.model); }
}
