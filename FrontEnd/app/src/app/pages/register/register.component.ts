import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})



export class RegisterComponent  implements OnInit{
    form: any = {
      username: null,
      email: null,
      password: null
    };

    @NgModule({
      imports: [
        FormsModule
      ]
    })
    
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService) {}   

    ngOnInit(): void {
      
    }

    onSubmit(): void {
      const { username, email, password } = this.form;
      //This Method That Returns An Observable Object (authService.register())
      this.authService.register(username, email, password).subscribe({
        next: (data: any) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        }
      });  
    }




}
