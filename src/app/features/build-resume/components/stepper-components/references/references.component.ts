import { Component, Input } from '@angular/core';
import { IReferences } from '../../../../models/resume.model';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  @Input() heading: string = '';
  public dummyReferencesData: IReferences =  {
    name: '',
    phoneNumber: '',
    email: ''
  }
  public referencesData: Array<IReferences> = [
    {
      name: '',
      phoneNumber: '',
      email: ''
    }
  ]



  public addNewFields() {
    this.referencesData.push(JSON.parse(JSON.stringify(this.dummyReferencesData)))
  }

  public deleteReferenceItem(index: number) {
    this.referencesData.splice(index,1)
  }

}
