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

#define R 10040

using namespace std;


//bisogna definre la funzione Req

double trasf (double *x, double *par) {
        double result=1/(sqrt(pow(R,2)+pow(x[0]*par[0]-1/(x[0]*par[1]),2))*x[0]*par[1]);
        return result;
}


int main(int argc, char** argv){

 
    TGraphErrors* myGraph = new TGraphErrors(argv[1]);
    myGraph->GetYaxis()->SetTitle("H");
    myGraph->GetXaxis()->SetTitle("omega (1/s)");
    myGraph->SetMarkerStyle(20);
    myGraph->SetMarkerSize(1);

    //DEFINISCO LA MIA FUNZIONE
    TF1* myFun = new TF1("MyFun", trasf, 0, 23000, 2);
    myFun->SetParameter(0, 0.1); 
    myFun->SetParameter(1, 52e-9);

    myFun->SetParName(0,"L");
    myFun->SetParName(1,"C");


    //INIZIO ANALISI DEI DATI

    //DISEGNO LO SCHIFO
    gStyle->SetOptFit(1112);
    TApplication* myAPP = new TApplication("myAPP", NULL, NULL);
    TCanvas* myCanvas = new TCanvas("H su C", "Titolo",0,0,1500,1000);

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
