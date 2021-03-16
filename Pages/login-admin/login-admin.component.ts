import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  usuarios = [
    { "id": 1, "first_name": "Suellen", "last_name": "Senechault", "email": "ssenechault0@shareasale.com", "gender": "Agender", "ip_address": "126.38.168.211" },
  { "id": 2, "first_name": "Leopold", "last_name": "Haste", "email": "lhaste1@themeforest.net", "gender": "Genderqueer", "ip_address": "131.108.141.24" },
  { "id": 3, "first_name": "Lanie", "last_name": "Vatini", "email": "lvatini2@51.la", "gender": "Female", "ip_address": "218.25.81.248" },
  { "id": 4, "first_name": "Pooh", "last_name": "Lebbon", "email": "plebbon3@imdb.com", "gender": "Female", "ip_address": "222.15.142.234" },
  { "id": 5, "first_name": "Randy", "last_name": "Dowdney", "email": "rdowdney4@statcounter.com", "gender": "Non-binary", "ip_address": "108.248.155.153" },
  { "id": 6, "first_name": "Ysabel", "last_name": "Lumb", "email": "ylumb5@ft.com", "gender": "Agender", "ip_address": "122.251.12.89" },
  { "id": 7, "first_name": "Ken", "last_name": "McLoughlin", "email": "kmcloughlin6@biblegateway.com", "gender": "Genderqueer", "ip_address": "139.192.78.177" },
  { "id": 8, "first_name": "Davine", "last_name": "Grestie", "email": "dgrestie7@spiegel.de", "gender": "Male", "ip_address": "183.212.49.175" },
  { "id": 9, "first_name": "Wendye", "last_name": "Genike", "email": "wgenike8@sitemeter.com", "gender": "Non-binary", "ip_address": "129.244.109.7" },
  { "id": 10, "first_name": "Alvy", "last_name": "Koppen", "email": "akoppen9@psu.edu", "gender": "Agender", "ip_address": "90.182.207.52" }
]

  constructor() { }

  ngOnInit(): void {
  }

}
