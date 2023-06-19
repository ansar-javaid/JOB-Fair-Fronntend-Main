import { Component } from '@angular/core';
import { IChangePassword } from '../../models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  
  public errorMessage: string = '';
  public submitted: boolean = false;
  public forgotPasswordData: IChangePassword = {
    email: '',
    oldPassword: '',
    newPassword: ''
  }
}
