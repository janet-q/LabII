
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

double Z (double *x, double *par) {
        double result = 1/(2*M_PI*x[0])*1/par[0];
        return result;
}


int main(int argc, char** argv){

    TGraphErrors* myGraph = new TGraphErrors(argv[1]);
    myGraph->GetXaxis()->SetTitle("freqeunza (s^-1)");
    myGraph->GetYaxis()->SetTitle("Z (s F^(-1))");
    myGraph->SetMarkerStyle(20);
    myGraph->SetMarkerSize(1);

    //DEFINISCO LA MIA FUNZIONE
    TF1* myFun = new TF1("myFun", Z, -0.01, 0.0019, 1);
    myFun->SetParameter(0, 50e-9); //5e-4

    myFun->SetParName(0,"C");


    //INIZIO ANALISI DEI DATI

    //DISEGNO LO SCHIFO
    gStyle->SetOptFit(1112);
    TApplication* myAPP = new TApplication("myAPP", NULL, NULL);
    TCanvas* myCanvas = new TCanvas("ZdiC", "Titolo",0,0,1500,1000);

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







