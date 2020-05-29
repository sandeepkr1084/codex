import { Component, OnInit } from "@angular/core";
// import swal from 'sweetalert';

@Component({
  selector: "app-type-check",
  templateUrl: "./type-check.component.html",
  styleUrls: ["./type-check.component.css"],
})
export class TypeCheckComponent implements OnInit {
  texts ="Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen.";
  start = false;
  isMatch: boolean;
  past: string;
  present: string;
  future: string;
  wordArr: any;
  inputText: string;
  noOfWord: number;
  currentWord = 0;
  correctWord = 0;
  wrongWord = 0;
  wordPerMinute = 0;

  onClick() {
    this.start = true;
    console.log(this.start);
  }
msec = 0;
sec = 0;
min = 0;
timer = setInterval(() => {
      if (this.start) {
          this.msec += 50;
          if (this.msec == 1000) {
              this.sec++;
              this.msec = 0;
          }
          if (this.sec == 60) {
              this.min++;
              this.sec = 0;
          }
      }
  }, 50);
  ngOnInit() {
    if (!this.start) {
      this.noOfWord = this.texts.split(' ').length;
      this.wordArr = this.texts.split(' ');
      this.past = this.wordArr.slice(0, this.currentWord).join(' ');
      this.present = this.wordArr[this.currentWord];
      this.future = this.wordArr.slice(this.currentWord + 1 , this.wordArr.length).join(' ');
    }
  }
  onKeyUp(event) {
    if (this.start) {

      if (event.key === ' ') {
        if (this.present === this.inputText.slice(0, this.inputText.length - 1)) {
          this.currentWord++;
          this.inputText = '';
          this.past = this.wordArr.slice(0, this.currentWord).join(' ');
          this.present = this.wordArr[this.currentWord];
          this.future = this.wordArr.slice(this.currentWord + 1, this.wordArr.length).join(' ');

        }
        if (this.currentWord === this.noOfWord) {
          clearInterval(this.timer);
          alert("Great!!"+ "You completed this test in " + this.min + " min, " + this.sec + "." + this.msec + " sec!!!");
        }
      }
    }
    if (this.currentWord < this.noOfWord) {
      const presentPart = this.present.slice(0, this.inputText.length);
      if (presentPart === this.inputText && this.inputText !== '') {
        this.isMatch = true;
        this.correctWord++;
      }
      else {
        this.isMatch = false;
        this.wrongWord++;
      }
    }

  }
  getColor() {
    if (this.isMatch) {
      return 'green';
    }
    else {
      return 'red';
    }
  }
  setColor() {
    return 'grey';
  }

}
