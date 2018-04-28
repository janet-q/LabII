
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

double funzione (double * x,double * par){
    double h = par[0]*exp(-par[1]*x[0])*(par[1]*cos(par[2]*x[0])+par[2]*sin(par[2]*x[0]);
    return h;
}

int main(int argc, char** argv){

//controllo che sia stato inserito il parametro
    if (argc < 3){
        cout << "metti il nome" <<endl;
        return 1;
    }

    TGraphErrors* myGraph = new TGraphErrors(argv[1]);
    myGraph->GetXaxis()->SetTitle("V (V)");
    myGraph->GetYaxis()->SetTitle("t (s)");
    myGraph->SetMarkerStyle(20);
    myGraph->SetMarkerSize(1);

    //DEFINISCO LA MIA FUNZIONE
    TF1* myFun = new TF1("myFun", funzione, -0.01, 0.0019, 3);
    myFun->SetParameter(0, 3e-5); //3e-5
    myFun->SetParameter(1, 300);
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




