import { map, catchError } from "rxjs/operators";
import { Veiculo } from "./veiculo.model";
import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarRef } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { isError } from "util";

@Injectable({
  providedIn: "root",
})
export class VeiculoService {
  baseURL = "http://localhost:3001/veiculos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ["msg-erro"] : ["msg-ok"],
    });
  }

  create(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.baseURL, veiculo).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }
  read(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseURL);
  }

  readId(id: string): Observable<Veiculo> {
    let url = `${this.baseURL}/${id}`;
    return this.http.get<Veiculo>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    let url = `${this.baseURL}/${veiculo.id}`;
    return this.http.put<Veiculo>(url, veiculo).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  delete(id: number): Observable<Veiculo> {
    let url = `${this.baseURL}/${id}`;
    return this.http.delete<Veiculo>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage("Falha no processamento...", true);
    return EMPTY;
  }
}
