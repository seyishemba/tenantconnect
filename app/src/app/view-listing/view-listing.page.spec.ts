import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewListingPage } from './view-listing.page';

describe('ViewListingPage', () => {
  let component: ViewListingPage;
  let fixture: ComponentFixture<ViewListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
