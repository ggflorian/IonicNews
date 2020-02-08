import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NewsPageModule } from '../news/news.module';
import { NewsSinglePageModule } from '../news-single/news-single.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule, 
    NewsPageModule,
    NewsSinglePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
