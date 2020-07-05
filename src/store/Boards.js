'use strict'

import Template from './Template.js'

export default {
	getBoards: () => [
		{
			name: 'smoothieboard',
			caption: 'Smoothieboard',
			motorWarningCurrent: 1200,
			motorLimitCurrent: 2000,
			seriesResistor: 4700,
			microstepping: false,
			microsteppingInterpolation: false,
			numDrives: 5,
			heaterPorts: ['bed', 'e0heat', 'e1heat'],
			fanPorts: ['Q4', 'Q8', 'fan0'],
			pwmPorts: ['Q4', 'bed', 'e0heat', 'e1heat', 'Q8', 'fan0'],
			gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax'],
			analogPorts: ['bedtemp', 'e0temp', 'e1temp', 't3'],
			spiCsPorts: [],
			hasEthernet: true,
            hasWiFi: false,
            hasESP: false,
			hasPowerFailureDetection: false,
			hasMotorLoadDetection: false,
			supportsDisplay: true,
			supports12864: true,
			firmwareFile: 'firmware.bin',
			iapFile: '',
			expansionBoards: [],
			maxExpansionBoards: 0,
            stepperDriver: "A5984",
            stepperDriverTimings: "1.0:1.0:0.4:0.4",
            stepperDriverSmart: false,
            lpc: {
                  externalSDCard:{
                      csPin: "0.28",
                      cardDetectPin: "0.27",
                      spiFrequencyHz: 4000000,
                      spiChannel: 0,
                  },
                  internalSDCardSPIFrequencyHz: 25000000,
                  lcd:{
                      lcdCSPin:       "0.16",
                      lcdBeepPin:     "1.31",
                      encoderPinA:    "3.25",
                      encoderPinB:    "3.26",
                      encoderPinSw:   "1.30",
                      lcdDCPin:       "NoPin",
                      panelButtonPin: "2.11",
                      spiChannel: 0,
                  },
                  diagnosticPin: "1.18",
            }
		},
      {
          name: 'biquskr_1.1',
          caption: 'SKR v1.1',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: false,
          microsteppingInterpolation: false,
          numDrives: 5,
          heaterPorts: ['bed', 'e0heat', 'e1heat'],
          fanPorts: ['fan0'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
          gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax'],
          analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: true,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: true,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          lpc: {
                externalSDCard:{
                    csPin: "1.23",
                    cardDetectPin: "1.31",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                softwareSPI:{
                    pins: ["1.20", "NoPin", "1.18"],
                },
                lcd:{
                    lcdCSPin:       "0.16",
                    lcdBeepPin:     "1.30",
                    encoderPinA:    "3.26",
                    encoderPinB:    "3.25",
                    encoderPinSw:   "2.11",
                    lcdDCPin:       "0.18",
                    panelButtonPin: "NoPin",
                    spiChannel: 2, //Software SPI
                },
                diagnosticPin: "NoPin",
          }
      },
      {
          name: 'biquskr_1.3',
          caption: 'SKR v1.3',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: true,
          microsteppingInterpolation: false,
          numDrives: 5,
          heaterPorts: ['bed', 'e0heat', 'e1heat'],
          fanPorts: ['fan0'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
          gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax', 'servo0'],
          analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: true,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: true,
          supportsDisplay: true,
          supports12864: true,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: true,
          lpc: {
                externalSDCard:{
                    csPin: "0.16",
                    cardDetectPin: "1.31",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                softwareSPI:{
                    pins: ["1.20", "NoPin", "1.18"],
                },
                lcd:{
                    lcdCSPin:       "1.19",
                    lcdBeepPin:     "1.30",
                    encoderPinA:    "3.26",
                    encoderPinB:    "3.25",
                    encoderPinSw:   "0.28",
                    lcdDCPin:       "NoPin",
                    panelButtonPin: "NoPin",
                    spiChannel: 2, //Software SPI
                },
                diagnosticPin: "NoPin",
          }
      },
	  {
          name: 'biquskr_1.4',
          caption: 'SKR v1.4',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: true,
          microsteppingInterpolation: false,
          numDrives: 5,
          heaterPorts: ['bed', 'e0heat', 'e1heat'],
          fanPorts: ['fan0'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
          gpioPorts: ['xstop', 'ystop', 'zstop', 'e0stop', 'e1stop', 'probe', 'pwrstop', 'servo0'],
          analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: true,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: true,
          supportsDisplay: true,
          supports12864: true,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: true,
          lpc: {
                externalSDCard:{
                    csPin: "0.16",
                    cardDetectPin: "1.31",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                softwareSPI:{
                    pins: ["1.20", "NoPin", "1.18"],
                },
                lcd:{
                    lcdCSPin:       "1.19",
                    lcdBeepPin:     "1.30",
                    encoderPinA:    "3.26",
                    encoderPinB:    "3.25",
                    encoderPinSw:   "0.28",
                    lcdDCPin:       "NoPin",
                    panelButtonPin: "NoPin",
                    spiChannel: 2, //Software SPI
                },
                diagnosticPin: "1.18",
          }
      },
	  {
          name: 'azsmz',
          caption: 'Azsmz Mini',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: false,
          microsteppingInterpolation: false,
          numDrives: 5,
          heaterPorts: ['bed', 'e0heat', 'e1heat'],
          fanPorts: ['fan0'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
          gpioPorts: ['xstop', 'ystop', 'zstop', 'e0stop', 'e1stop', 'probe', 'servo0'],
          analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: true,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          lpc: {
                externalSDCard:{
                    csPin: "0.16",
                    cardDetectPin: "3.25",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                softwareSPI:{
                    pins: ["NoPin", "NoPin", "NoPin"],
                },
                lcd:{
                    lcdCSPin:       "1.22",
                    lcdBeepPin:     "1.30",
                    encoderPinA:    "4.28",
                    encoderPinB:    "1.27",
                    encoderPinSw:   "3.26",
                    lcdDCPin:       "2.6",
                    panelButtonPin: "NoPin",
                    spiChannel: 2, //Software SPI
                },
                diagnosticPin: "1.18",
          }
      },
	  {
          name: 'azteegX5_1.1',
          caption: 'Azteeg X5 Mini v1.1',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: false,
          microsteppingInterpolation: false,
          numDrives: 4,
          heaterPorts: ['bed', 'e0heat'],
          fanPorts: ['fan0'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
          gpioPorts: ['xstop', 'ystop', 'zstop', 'e0stop'],
          analogPorts: ['bedtemp', 'e0temp'],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: true,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          lpc: {
                externalSDCard:{
                    csPin: "1.23",
                    cardDetectPin: "1.31",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                softwareSPI:{
                    pins: ["NoPin", "NoPin", "NoPin"],
                },
                lcd:{
                    lcdCSPin:       "0.16",
                    lcdBeepPin:     "0.25",
                    encoderPinA:    "3.25",
                    encoderPinB:    "3.26",
                    encoderPinSw:   "2.11",
                    lcdDCPin:       "2.6",
                    panelButtonPin: "1.22",
                    spiChannel: 2, //Software SPI
                },
                diagnosticPin: "4.28",
          }
      },
      {
          name: 'rearm',
          caption: 'ReARM',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: false,
          microsteppingInterpolation: false,
          numDrives: 5,
          heaterPorts: ['bed', 'e0heat', 'e1heat'],
          fanPorts: ['e1heat'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'Servo0', 'Servo1', 'Servo3'],
          gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax'],
          analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
          spiCsPorts: [],
          hasEthernet: true,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: true,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          lpc: {
                externalSDCard:{
                    csPin: "1.23",
                    cardDetectPin: "1.31",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                lcd:{
                    lcdCSPin:       "0.16",
                    lcdBeepPin:     "1.30",
                    encoderPinA:    "3.25",
                    encoderPinB:    "3.26",
                    encoderPinSw:   "2.11",
                    lcdDCPin:       "2.6",
                    panelButtonPin: "1.22",
                    spiChannel: 0,
                },
                diagnosticPin: "4.28",
          }
      },
      {
          name: 'mkssbase_1.3',
          caption: 'MKS Sbase 1.3',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: false,
          microsteppingInterpolation: false,
          numDrives: 5,
          heaterPorts: ['BED', 'E1', 'E2'],
          fanPorts: ['FAN'],
          pwmPorts: ['BED', 'E1', 'E2', 'FAN'],
          gpioPorts: ['XMin', 'YMin', 'ZMin', 'XMax', 'YMax', 'ZMax'],
          analogPorts: ['TH1', 'TH2', 'TH3', 'TH4'],
          spiCsPorts: [],
          hasEthernet: true,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: true,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "DRV8825",
          stepperDriverTimings: "1.9:1.9:0.65:0.65",
          stepperDriverSmart: false,
          lpc: {
                externalSDCard:{
                    csPin: "0.28",
                    cardDetectPin: "0.27",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                lcd:{
                    lcdCSPin:       "0.16",
                    lcdBeepPin:     "1.31",
                    encoderPinA:    "3.25",
                    encoderPinB:    "3.26",
                    encoderPinSw:   "1.30",
                    lcdDCPin:       "NoPin",
                    panelButtonPin: "2.11",
                    spiChannel: 0,
                },
                diagnosticPin: "1.18",
          }
      },
      {
        name: 'mkssgenl_1.0',
        caption: 'MKS SGen L v1.0',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: false,
        numDrives: 5,
        heaterPorts: ['bed', 'e0heat', 'e1heat'],
        fanPorts: ['fan0'],
        pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
        gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: false,
        supportsDisplay: true,
        supports12864: true,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: [],
        maxExpansionBoards: 0,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        lpc: {
            externalSDCard:{
                csPin: "0.16",
                cardDetectPin: "1.31",
                spiFrequencyHz: 4000000,
                spiChannel: 0,
            },
            internalSDCardSPIFrequencyHz: 25000000,
            softwareSPI:{
                pins: ["1.20", "NoPin", "1.18"],
            },
            lcd:{
                lcdCSPin:       "1.19",
                lcdBeepPin:     "1.30",
                encoderPinA:    "3.26",
                encoderPinB:    "3.25",
                encoderPinSw:   "0.28",
                lcdDCPin:       "NoPin",
                panelButtonPin: "NoPin",
                spiChannel: 2, //Software SPI
            },
            diagnosticPin: "NoPin",
        }
    },
	],

	getBoard(boardType) {
		const boardDefinitions = this.getBoards();
		for (let i in boardDefinitions) {
			if (boardDefinitions[i].name == boardType) {
				return boardDefinitions[i];
			}
		}
		throw 'Invalid board';
	},

	isValidPin(board, pin, boardId) {
		const pinTypes = ['heaterPorts', 'fanPorts', 'pwmPorts', 'gpioPorts', 'analogPorts', 'spiCsPorts'];
		return pinTypes.some(function(pinType) {
			return board[pinType].some(function(boardPort) {
				return ((!boardId && Template.isSamePin(pin, boardPort)) ||
						(boardId !== undefined && Template.isSamePin(pin, `${boardId}.${boardPort}`)));
			});
		});
	}
}
