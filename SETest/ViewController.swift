//
//  ViewController.swift
//  SETest
//
//  Created by Ehsan Yazdan Panah on 11/10/2017.
//  Copyright © 2017 Ehsan Yazdan Panah. All rights reserved.
//

import UIKit
import MapKit
import CoreLocation

class ViewController: UIViewController, CLLocationManagerDelegate {
    @IBOutlet weak var textmessage: UILabel!
    @IBOutlet weak var Lat: UITextField!
    @IBOutlet weak var Lng: UITextField!
    @IBOutlet weak var MapVi: MKMapView!
    @IBOutlet weak var MapView2: MKMapView!
    
    @IBOutlet weak var SLocarion: UIButton!
    
    let manager = CLLocationManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        manager.delegate = self
        manager.desiredAccuracy = kCLLocationAccuracyBest
        manager.requestWhenInUseAuthorization()
        manager.startUpdatingLocation()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func ClickedButton(_ sender: Any) {
        if (Lat.text?.isEmpty)! && (Lng.text?.isEmpty)!{
            textmessage.text = "Enter a valid Latitude and Longitude..."
        }
        else{
            self.view.endEditing(true);
            print("Button was pressed.")
            let latText: String = Lat.text!;
            let lngText: String = Lng.text!;
            let latVal = Double(latText);
            let lngVal = Double(lngText);
            
            let location = CLLocationCoordinate2D(latitude:latVal!,longitude: lngVal!);
            let span = MKCoordinateSpanMake(0.01, 0.01);
            let region = MKCoordinateRegion(center: location, span: span);
            MapVi.setRegion(region, animated: true)
            
            manager.stopUpdatingLocation()
            
            // Add a pin here
            let annotation = MKPointAnnotation()
            annotation.coordinate = CLLocationCoordinate2D(latitude: latVal!, longitude: lngVal!)
            MapVi.addAnnotation(annotation)
            
            textmessage.text = "Location of Latitude of " + latText + " and Longitude of " + lngText;
        }
    }
    
    @IBAction func CurrentLoc(_ sender: Any) {
        manager.delegate = self
        manager.desiredAccuracy = kCLLocationAccuracyBest
        manager.requestWhenInUseAuthorization()
        //manager.startUpdatingLocation()
    }
    
    @IBAction func MyLocation(_ sender: UIButton) {
        self.view.endEditing(true);
        manager.startUpdatingLocation()
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        let location = locations[0]
        
        let span:MKCoordinateSpan = MKCoordinateSpanMake(0.01, 0.01)
        let myLocation:CLLocationCoordinate2D = CLLocationCoordinate2DMake(location.coordinate.latitude, location.coordinate.longitude)
        let region:MKCoordinateRegion = MKCoordinateRegionMake(myLocation, span)
        MapVi.setRegion(region, animated: true)
        
        self.MapVi.showsUserLocation = true
        self.MapVi.showsBuildings = true
        
        textmessage.text = "Location of Latitude of " + String(location.coordinate.latitude) + " and Longitude of " + String(location.coordinate.longitude);
    }
}
