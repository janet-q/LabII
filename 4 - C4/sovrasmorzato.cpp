
#include <iostream>
#include <fstream>
#include <sstream>
#include <cstring>
#include <string>
#include <math.h>
#include <cstdlib>
#include <TF1.h>

#include <TGraphErrors.h>
#include <TAxis.h>
#include <TStyle.h>
#include <TApplication.h>
#include <TCanvas.h>

using namespace std;

//bisogna definre la funzione Req

double sovrasmorzamento (double *x, double *par) {
        double result = par[0]*(exp(-x[0]*(par[1]-sqrt(pow(par[1],2)-pow(par[2],2))))-exp(-x[0]*(par[1]+sqrt(pow(par[1],2)-pow(par[2],2)))));
        return result;
}

int main(int argc, char** argv){

//controllo che sia stato inserito il parametro

    TGraphErrors* myGraph = new TGraphErrors(argv[1]);
    myGraph->GetXaxis()->SetTitle("t (s)");
    myGraph->GetYaxis()->SetTitle("V (V)");
    myGraph->SetMarkerStyle(20);
    myGraph->SetMarkerSize(1);

    //DEFINISCO LA MIA FUNZIONE
    TF1* myFun = new TF1("myFun", sovrasmorzamento, -0.01, 0.0019, 3);
    myFun->SetParameter(0, 0.0156); //3e-5
    myFun->SetParameter(1, 50000);
    myFun->SetParameter(2, 11322);

    myFun->SetParName(0,"amp");
    myFun->SetParName(1,"gamma");
    myFun->SetParName(2,"omega");


    //INIZIO ANALISI DEI DATI

    //DISEGNO LO SCHIFO
    gStyle->SetOptFit(1112);
    TApplication* myAPP = new TApplication("myAPP", NULL, NULL);
    TCanvas* myCanvas = new TCanvas("sottosmorzamento", "Titolo",0,0,1500,1000);

    myCanvas->cd();


    myGraph->Draw("AP");
    myGraph->Fit("myFun");
    myCanvas->Modified();
    myCanvas->Update();

    myAPP->Run();
    //myCanvas->Print();



    //risultati del fit
    /*std::string fileOutput = argv[2];
    std::ofstream OutFile (fileOutput.c_str());
    OutFile << "La Resistenza dell'amperometro è Ra = " << Req->GetParameter(0) <<" +- " << Req->GetParError(0)<< endl;;
    OutFile.close();*/

   // myAPP->Run();
    return 0;

}





