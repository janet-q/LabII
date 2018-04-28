#include <iostream>
#include <fstream>
#include <TGraph.h>
#include <TF1.h>
#include <TStyle.h>
#include <TApplication.h>
#include <TCanvas.h>
#include <math.h>
#include <vector>

#define R 90.0 //Ohm
#define VO 1500 //mV


using namespace std;

/*double espon(double* x, double* par){
    return (double)R*(double)VO*par[1]*(exp(-(double)R*x[0]/(2*par[0])));
}

double sincos(double* x, double* par){
    return ((double)R/(2*par[0]))*cos((sqrt(1/(par[0]*par[1])))*x[0])+(sqrt(1/(par[0]*par[1])))*sin((sqrt(1/(par[0]*par[1])))*x[0]);
}
*/
double funz (double* x, double* par)
{

    /*double gamma = (double)R/(2*par[0]);
    double omega = sqrt(1/(par[0]*par[1]));
    double esp=(double)R*(double)VO*par[1]*(exp(-gamma*x[0]));
    double sincos=gamma*cos(omega*x[0])+omega*sin(omega*x[0]);
    return esp*sincos;*/
    //return espon(x, par)*sincos(x, par);
    double cosa= R*VO*2*(par[0]/(R*par[1]*par[1]))*exp(-par[0]*x[0])(par[0]*cos(par[1]*x[0])+par[1]*sin(par[1]*x[0]));
    return cosa;
}

int main(int argc, char** argv){

//controllo che sia stato inserito il parametro
    if (argc < 2){
        cout << "metti il nome" <<endl;
        return 1;
    }

    double tMin = 0.;
    double tMax = 1;

    int N = 18;

    TGraph* myGraph = new TGraph(argv[1]);

    //INIZIO ANALISI DEI DATI
    TF1* myFun = new TF1("myFun", funz, tMin, tMax,3);

    //Inizializzazione dei parametri:
    myFun->SetParameter(0,1e-5);
    myFun->SetParameter(1,1e-5);
    //Nomino i parametri
    myFun->SetParName(0,"gamma");
    myFun->SetParName(1,"omega");

    //DISEGNO LO SCHIFO
    gStyle->SetOptFit(1112);
    TApplication* myAPP = new TApplication("myAPP", NULL, NULL);
    TCanvas* myCanvas = new TCanvas("myCanvas", "Titolo",0,0,700,500);

    myCanvas->cd();
    myGraph->GetXaxis();
    myGraph->SetTitle("t (micros)");
    myGraph->GetYaxis();
    myGraph->SetTitle("V (mV)");
    myGraph->SetMarkerStyle(20);
    myGraph->SetMarkerSize(0.5);

    myGraph->Draw("AP");
    myGraph->Fit("myFun");

    myCanvas->Modified();
    myCanvas->Update();

    //myCanvas->Print();

    //risultati del fit
    double chi2 = myFun->GetChisquare();
    cout << chi2 << endl;
    cout << "Chi ridotto" << chi2/myFun->GetNDF() << endl;
    cout << "p_v" << myFun->GetProb() << endl;
    double amp = myFun->GetChisquare();

    myAPP->Run();
    return 0;

}



