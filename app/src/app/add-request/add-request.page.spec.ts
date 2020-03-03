import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRequestPage } from './add-request.page';

describe('AddRequestPage', () => {
  let component: AddRequestPage;
  let fixture: ComponentFixture<AddRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
