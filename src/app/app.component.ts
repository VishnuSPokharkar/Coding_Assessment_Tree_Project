import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vishnu-tree-assignment';
  menduDataTree: any = []
  loading: boolean = true;
  treeHtml: any = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMenuData().subscribe((data: any) => {
      console.log(data);
      this.menduDataTree = data.data;
      this.treeHtml = this.buildTreeHtml(this.menduDataTree);
      console.log(this.treeHtml);
      this.loading = false;
    })
  }

  buildTreeHtml(data, parentId = null) {
    const tree = [];

    for (const item of data) {
      item.label = item.name;
      if (item.refMenuId === parentId) {
        const children = this.buildTreeHtml(data, item.id);
        if (children.length > 0) {
          item.children = children;
        }
        tree.push(item);
      }
    }

    return tree;
  }


}
