import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAvatarPage } from './edit-avatar.page';

describe('EditAvatarPage', () => {
  let component: EditAvatarPage;
  let fixture: ComponentFixture<EditAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAvatarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
