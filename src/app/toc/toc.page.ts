import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
public chapters = [
  {
    title: "Prayer Card | Luke 17:6 NIV",
    url: "/chapter1"
  },
  {
    title: "Prayer Card | 2nd Corinthians 5:17 KJV",
    url: "/chapter2"
  },
  {
    title: "Prayer Card | John 1:3 ESV",
    url: "/chapter3"
  },
  {
    title: "Prayer Card | Ephesians 5:2 ESV",
    url: "/chapter4"
  },
  {
    title: "Prayer Card | Isaiah 12:3 ESV",
    url: "/chapter5"
  },
  {
    title: "Prayer Card | Matthew 13: 31-32 NLT",
    url: "/chapter6"
  },
  {
    title: "Prayer Card | Psalm 1:3 NKJV",
    url: "/chapter7"
  },
  {
    title: "Prayer Card | Song of Songs 4:16 NIV",
    url: "/chapter8"
  }
  

];
  constructor() { }

  ngOnInit() {
  }

}
