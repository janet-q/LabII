#include <iostream>
#include <fstream>
#include <TGraph.h>
#include <TF1.h>
#include <TStyle.h>
#include <TApplication.h>
#include <TCanvas.h>
#include <math.h>
#include <vector>

#define R 90 //Ohm
#define VO 1.5 //V


using namespace std;

bool ReadData (char* fileName, vector<double> x, vector<double> y);

double funz (double* x, double* par)
{
    double gamma = R/(2*par[0]);
    double omega = sqrt(1/(par[0]*par[1]));
    //R*C*V0*(exp(-gamma*t)*(gamma*cos(omega*t)+omega*sin(omegat)
    return R*VO*par[1]*exp(-gamma*x[0])*(gamma*cos(omega*x[0])+omega*sin(omega*x[0]));
}

int main(int argc, char** argv){

//controllo che sia stato inserito il parametro
    if (argc < 2){
        cout << "metti il nome" <<endl;
        return 1;
    }

    //vettori
    vector<double> t;
    vector<double> V;

    double tMin = -1;
    double tMax = 3000;

    int N = t.size();

    TGraph* myGraph;

    for (int i = 0; i<N; i++){
        myGraph->SetPoint(i, t[i], V[i]);
    }


    //INIZIO ANALISI DEI DATI
    TF1* myFun = new TF1("myFun", funz, -1, 0.5,2);

    //Inizializzazione dei parametri:
    myFun->SetParameter(0,10e-1);
    myFun->SetParameter(1,52e-9);
    //Nomino i parametri
    myFun->SetParName(0,"L");
    myFun->SetParName(1,"C");

    //DISEGNO LO SCHIFO
    gStyle->SetOptFit(1112);
    TApplication* myAPP = new TApplication("myAPP", NULL, NULL);
    TCanvas* myCanvas = new TCanvas("myCanvas", "Titolo",0,0,700,500);

    myCanvas->cd();
    cout << "line 77"<<endl;
    myGraph->GetXaxis();
    myGraph->SetTitle("t (micros)");
    myGraph->GetYaxis();
    myGraph->SetTitle("V (mV)");
    myGraph->SetMarkerStyle(20);
    myGraph->SetMarkerSize(0.5);
    
    myGraph->Draw("AP");
    //myGraph->Fit("myFun");

    myCanvas->Modified();
    myCanvas->Update();

    //myCanvas->Print();

    /*/risultati del fit
    double chi2 = myFun->GetChisquare();
    cout << chi2 << endl;
    cout << "Chi ridotto" << chi2/myFun->GetNDF() << endl;
    cout << "p_v" << myFun->GetProb() << endl;
    double amp = myFun->GetChisquare();*/

    myAPP->Run();
    return 0;

}

bool ReadData (char* fileName, vector<double> x, vector<double> y ){
    double valx;
    double valy;
    fstream InFile;
    InFile.open(fileName, std::ios::in);
    //verifico che il file si possa aprire
    if(InFile.good()== false){
        cout <<"errore" << endl;
        return false;
    }
    int i = 0;
    while (true){
         InFile >> valx >> valy;

         x.push_back(valx*1e-6);
         y.push_back(valy*1e-3);

         cout << "x: " << x[i] << "y: " << y[i]<<endl;

         i++;

         if(InFile.eof()==true){
             break;
         }

     }
    return true;

}

