class Car {
    def start_engine(self):
        # Code for starting the car's engine
        pass
}

class ElectricCar extends Car {
    def start_engine(self):
        # Code for starting the electric car's engine
        pass
}

class Car {
    def start_engine(self):
        # Use the engine starter strategy to start the engine
        pass
}

class EngineStarter {
    def start_engine(self):
        pass
}

class ElectricEngineStarter extends EngineStarter {
    def start_engine(self):
        # Code for starting an electric car's engine
        pass
}

class GasolineEngineStarter extends EngineStarter {
    def start_engine(self):
        # Code for starting a gasoline car's engine
        pass
}