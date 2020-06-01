import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenucompComponent } from './menucomp.component';

describe('MenucompComponent', () => {
  let component: MenucompComponent;
  let fixture: ComponentFixture<MenucompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenucompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
