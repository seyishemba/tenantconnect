import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewConnectionPage } from './view-connection.page';

describe('ViewConnectionPage', () => {
  let component: ViewConnectionPage;
  let fixture: ComponentFixture<ViewConnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConnectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewConnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
