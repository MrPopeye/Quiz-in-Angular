import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { Question } from './../../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  currentQuestion = 0;
  currentStatus = 1;
  correctAnswers = 0;
  questions: Question[];

  constructor() { }

  ngOnInit(): void {
    //10 intrebari
    this.questions = [ {
      Quest: 'Care este țara care are forma unei cizme?',
      Answer: [
        {Answ: 'Țara care are forma unei cizme este Spania', Value: false},
        {Answ: 'Țara care are forma unei cizme este Franța', Value: false},
        {Answ: 'Țara care are forma unei cizme este Portugalia', Value: false},
        {Answ: 'Țara care are forma unei cizme este Italia', Value: true}]
    },
    {
      Quest: 'În ce an a ajuns Christopher Columb în America?',
      Answer: [
        {Answ: '11 noiembrie 1918', Value: true},
        {Answ: '11 noiembrie 1919', Value: false},
        {Answ: '10 noiembrie 1917', Value: false},
        {Answ: '10 noiembrie 1918', Value: false}
      ]
    },
    {
      Quest: 'Cine a câștigat Cupa Mondială din 2014?',
      Answer: [
        {Answ: 'Cupa Mondială a fost câștigată de către Brazilia', Value: false},
        {Answ: 'Cupa Mondială a fost câștigată de către Germania', Value: true},
        {Answ: 'Cupa Mondială a fost câștigată de către Franța', Value: false},
        {Answ: 'Cupa Mondială a fost câștigată de către Argentina', Value: false}
      ]
    },
    {
      Quest: 'Din ce țară este fotbalistul Zlatan Ibrahimovic?',
      Answer: [
        {Answ: 'Finlanda', Value: false},
        {Answ: 'Suedia', Value: true},
        {Answ: 'Norvegia', Value: false},
        {Answ: 'Polonia', Value: false}
      ]
    },
    {
      Quest: 'Care este durata unui meci de fotbal (fără extra-time?',
      Answer: [
        {Answ: 'Durata unui meci de fotbal este de 90 de minute', Value: true},
        {Answ: 'Durata unui meci de fotbal este de 80 de minute', Value: false},
        {Answ: 'Durata unui meci de fotbal este de 100 de minute', Value: false},
        {Answ: 'Durata unui meci de fotbal este de 120 de minute', Value: false}
      ]
    },
    {
      Quest: 'In ce an a castigat Cristiano Ronaldo ultimul Balon de Aur?',
      Answer: [
        {Answ: 'În anul 2018', Value: false},
        {Answ: 'În anul 2019', Value: false},
        {Answ: 'În anul 2021', Value: false},
        {Answ: 'În anul 2017', Value: true}
      ]
    },
    {
      Quest: 'Care este capitala Spaniei?',
      Answer: [
        {Answ: 'Capitala este Berlin', Value: false},
        {Answ: 'Capitala este Barcelona', Value: false},
        {Answ: 'Capitala este Madrid', Value: true},
        {Answ: 'Capitala este Lisabona', Value: false}
      ]
    },
    {
      Quest: 'Câte pătrate există pe o tablă de șah standard?',
      Answer: [
        {Answ: 'Există 32 de pătrate', Value: false},
        {Answ: 'Există 64 de pătrate', Value: true},
        {Answ: 'Există 128 de pătrate', Value: false},
        {Answ: 'Există 86 de pătrate', Value: false}
      ]
    },
    {
      Quest: 'In ce an a luat sfarsit Primul Razboi Mondial?',
      Answer: [
        {Answ: 'În anul 1919', Value: false},
        {Answ: 'În anul 1917', Value: false},
        {Answ: 'În anul 1918', Value: true},
        {Answ: 'În anul 1920', Value: false}
      ]
    },
    {
      Quest: 'Cu ce sport este asociat Michael Jordan?',
      Answer: [
        {Answ: 'Baschet', Value: true},
        {Answ: 'Tenis', Value: false},
        {Answ: 'Gimnastică', Value: false},
        {Answ: 'Fotbal', Value: false}
      ]
    }
  ]
  }
  
  checkAnswer(option: boolean) {
    if (option == true) {
      //alert("Merge");
      this.currentStatus++;
      this.currentQuestion++;
      this.correctAnswers++;
    } else if (option == false) {
      alert("Răspuns greșit!");
      this.currentStatus++;
      this.currentQuestion++;
    }

    if (this.currentStatus >= 11) {
      if (this.correctAnswers >= 8) {
        alert ("Felicitări, ai trecut testul!")
      }
      else {
        alert ("Din păcate ai picat testul, încearcă din nou!")
      }
      this.currentStatus = 1;
      this.currentQuestion = 0;
      this.correctAnswers = 0;
    }
  }


}
