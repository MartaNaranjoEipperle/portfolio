import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  buttonText: string = "LET'S GET STARTED";
  isSubmitting: boolean = false; 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true;

  post = {
    endPoint: 'https://naranjo-eipperle.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.buttonText = "SENDING...";

      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.buttonText = "THANK YOU FOR YOUR MESSAGE";
            setTimeout(() => {
              this.buttonText = "LET'S GET STARTED";
              this.isSubmitting = false;
            }, 3000);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.buttonText = "ERROR, TRY AGAIN";
            ngForm.resetForm();
            setTimeout(() => {
              this.buttonText = "LET'S GET STARTED";
            }, 3000);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }
}
