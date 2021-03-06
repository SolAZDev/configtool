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
            blPorts: [],
			spiCsPorts: [],
			hasEthernet: true,
            hasWiFi: false,
            hasESP: false,
			hasPowerFailureDetection: false,
			hasMotorLoadDetection: false,
			supportsDisplay: true,
			supports12864: false, 
			firmwareFile: 'firmware.bin',
			iapFile: '',
			expansionBoards: [],
			maxExpansionBoards: 0,
            stepperDriver: "A5984",
            stepperDriverTimings: "1.0:1.0:0.4:0.4",
            stepperDriverSmart: false,
            serialRxPin:'',
            serialTxPin:'',
            espDataReadyPin:'',
            lpcTfrReadyPin:'',
            espResetPin:'',
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
            },
            drives: [
				{
                    diag: "NoPin",
                }
            ]
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
          blPorts: [],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: true,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: false,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          serialRxPin:'0.3',
          serialTxPin:'0.2',
          espDataReadyPin:'0.28',
          lpcTfrReadyPin:'1.30',
          espResetPin:'1.31',
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
          },
          drives: [
            {
                diag: "NoPin",
            }
        ]
      },
      {
          name: 'biquskr_1.3',
          caption: 'SKR v1.3',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: true,
          microsteppingInterpolation: true,
          numDrives: 5,
          heaterPorts: ['bed', 'e0heat', 'e1heat'],
          fanPorts: ['fan0'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
          gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax'],
          analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
          blPorts: ['servo0'],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: true,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: true,
          supportsDisplay: true,
          supports12864: false,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: ['BTT EXP-MOT'],
          maxExpansionBoards: 1,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: true,
          serialRxPin:'0.3',
          serialTxPin:'0.2',
          espDataReadyPin:'0.28',
          lpcTfrReadyPin:'1.30',
          espResetPin:'1.31',
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
          },
            drives: [
				{
                    diag: "1.29",
                },
                {
                    diag: "1.28",
                },
                {
                    diag: "1.27",
                },
                {
                    diag: "1.26",
                },
                {
                    diag: "1.25",
                }
            ]
      },
	  {
          name: 'biquskr_1.4',
          caption: 'SKR v1.4',
          motorWarningCurrent: 1200,
          motorLimitCurrent: 2000,
          seriesResistor: 4700,
          microstepping: true,
          microsteppingInterpolation: true,
          numDrives: 5,
          heaterPorts: ['bed', 'e0heat', 'e1heat'],
          fanPorts: ['fan0'],
          pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
          gpioPorts: ['xstop', 'ystop', 'zstop', 'e0stop', 'e1stop', 'probe', 'pwrstop'],
          analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
          blPorts: ['servo0'],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: true,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: true,
          supportsDisplay: true,
          supports12864: false,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: ['BTT EXP-MOT'],
          maxExpansionBoards: 1,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: true,
          serialRxPin:'4.29',
          serialTxPin:'4.28',
          espDataReadyPin:'0.28',
          lpcTfrReadyPin:'1.30',
          espResetPin:'1.31',
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
            },
            drives: [
				{
                    diag: "1.29",
                },
                {
                    diag: "1.28",
                },
                {
                    diag: "1.27",
                },
                {
                    diag: "1.26",
                },
                {
                    diag: "1.25",
                }
            ]
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
          blPorts: [],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: false,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          serialRxPin:'0.3',
          serialTxPin:'0.2',
          espDataReadyPin:'0.28',
          lpcTfrReadyPin:'1.30',
          espResetPin:'1.31',
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
            },
            drives: [
				{
                    diag: "NoPin",
                }
            ]
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
          blPorts: [],
          spiCsPorts: [],
          hasEthernet: false,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: false,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          serialRxPin:'',
          serialTxPin:'',
          espDataReadyPin:'',
          lpcTfrReadyPin:'',
          espResetPin:'',
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
            },
            drives: [
				{
                    diag: "NoPin",
                }
            ]
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
          blPorts: [],
          spiCsPorts: [],
          hasEthernet: true,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: false,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "", // no built in drivers.
          stepperDriverTimings: "",
          stepperDriverSmart: false,
          serialRxPin:'',
          serialTxPin:'',
          espDataReadyPin:'',
          lpcTfrReadyPin:'',
          espResetPin:'',
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
            },
            drives: [
				{
                    diag: "NoPin",
                }
            ]
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
          blPorts: [],
          spiCsPorts: [],
          hasEthernet: true,
          hasWiFi: false,
          hasESP: false,
          hasPowerFailureDetection: false,
          hasMotorLoadDetection: false,
          supportsDisplay: true,
          supports12864: false,
          firmwareFile: 'firmware.bin',
          iapFile: '',
          expansionBoards: [],
          maxExpansionBoards: 0,
          stepperDriver: "DRV8825",
          stepperDriverTimings: "1.9:1.9:0.65:0.65",
          stepperDriverSmart: false,
          serialRxPin:'',
          serialTxPin:'',
          espDataReadyPin:'',
          lpcTfrReadyPin:'',
          espResetPin:'',
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
            },
            drives: [
				{
                    diag: "NoPin",
                }
            ]
      },
      {
        name: 'mkssgenl_1.0',
        caption: 'MKS SGen L v1.0',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: true,
        numDrives: 5,
        heaterPorts: ['bed', 'e0heat', 'e1heat'],
        fanPorts: ['fan0'],
        pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0'],
        gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
        blPorts: ['servo0'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: true,
        supportsDisplay: true,
        supports12864: false,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: [],
        maxExpansionBoards: 0,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        serialRxPin:'0.3',
        serialTxPin:'0.2',
        espDataReadyPin:'0.28',
        lpcTfrReadyPin:'1.30',
        espResetPin:'1.31',
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
        },
        drives: [
            {
                diag: "1.29",
            },
            {
                diag: "1.27",
            },
            {
                diag: "1.25",
            },
            {
                diag: "1.28",
            },
            {
                diag: "1.26",
            }
        ]
    },
    {
        name: 'mkssgenl_2.0',
        caption: 'MKS SGen L v2.0',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: true,
        numDrives: 5,
        heaterPorts: ['bed', 'e0heat', 'e1heat'],
        fanPorts: ['fan0','fan1'],
        pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0','fan1'],
        gpioPorts: ['xstop', 'xstopmax', 'ystop', 'ystopmax', 'zstop', 'zstopmax'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
        blPorts: ['servo0','servo1'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: true,
        supportsDisplay: true,
        supports12864: false,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: [],
        maxExpansionBoards: 0,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        serialRxPin:'0.3',
        serialTxPin:'0.2',
        espDataReadyPin:'0.28',
        lpcTfrReadyPin:'1.30',
        espResetPin:'1.31',
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
        },
        drives: [
            {
                diag: "1.29",
            },
            {
                diag: "1.27",
            },
            {
                diag: "1.25",
            },
            {
                diag: "1.28",
            },
            {
                diag: "1.26",
            }
        ]
    },
    {
        name: 'biquskr_e3t',
        caption: 'SKR E3 Turbo',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: true,
        numDrives: 5,
        heaterPorts: ['bed', 'e0heat', 'e1heat'],
        fanPorts: ['fan0','fan1'],
        pwmPorts: ['bed', 'e0heat', 'e1heat', 'fan0','fan1'],
        gpioPorts: ['xstop', 'ystop', 'zstop', 'e0stop','e1stop','probe0','probe1','ptdet'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp'],
        blPorts: ['servo0','servo1'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: true,
        supportsDisplay: true,
        supports12864: false,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: [],
        maxExpansionBoards: 0,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        serialRxPin:'0.3',
        serialTxPin:'0.2',
        espDataReadyPin:'0.19',
        lpcTfrReadyPin:'0.20',
        espResetPin:'2.8',
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
        },
        drives: [
            {
                diag: "1.29",
            },
            {
                diag: "1.28",
            },
            {
                diag: "1.27",
            },
            {
                diag: "1.26",
            },
            {
                diag: "1.25",
            }
        ]
    },
    {
        name: 'biquskrpro_1.1',
        caption: 'SKR Pro',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: true,
        numDrives: 6,
        heaterPorts: ['bed', 'e0heat', 'e1heat','e2heat'],
        fanPorts: ['fan0','fan1','fan2'],
        pwmPorts: ['bed', 'e0heat', 'e1heat','e2heat','fan0','fan1','fan2'],
        gpioPorts: ['xstop','ystop','zstop', 'e0stop','e1stop','e2stop','probe'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp','e2temp'],
        blPorts: ['servo0'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: true,
        supportsDisplay: true,
        supports12864: false,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: ['BTT EXP-MOT'],
        maxExpansionBoards: 1,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        serialRxPin:'PD9',
        serialTxPin:'PD8',
        espDataReadyPin:'A.8',
        lpcTfrReadyPin:'G.4',
        espResetPin:'F.12',
        lpc: {
            externalSDCard:{
                csPin: "NoPin",
                cardDetectPin: "NoPin",
                spiFrequencyHz: 4000000,
                spiChannel: 0,
            },
            internalSDCardSPIFrequencyHz: 25000000,
            softwareSPI:{
                pins: ["NoPin", "NoPin", "NoPin"],
            },
            lcd:{
                lcdCSPin:       "NoPin",
                lcdBeepPin:     "NoPin",
                encoderPinA:    "NoPin",
                encoderPinB:    "NoPin",
                encoderPinSw:   "NoPin",
                lcdDCPin:       "NoPin",
                panelButtonPin: "NoPin",
                spiChannel: 2, //Software SPI
            },
            diagnosticPin: "NoPin",
        },
        drives: [
            {
                diag: "B.10",
            },
            {
                diag: "E.12",
            },
            {
                diag: "G.8",
            },
            {
                diag: "E.15",
            },
            {
                diag: "E.10",
            },
            {
                diag: "G.5",
            }
        ]
    },
    {
        name: 'biqugtr_1.0',
        caption: 'SKR GTR v1.0',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: true,
        numDrives: 6,
        heaterPorts: ['bed', 'e0heat', 'e1heat','e2heat',],
        fanPorts: ['fan0','fan1','fan2'],
        pwmPorts: ['bed', 'e0heat', 'e1heat','e2heat','fan0','fan1','fan2'],
        gpioPorts: ['xstop','ystop','zstop', 'e0stop','e1stop','e2stop','probe'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp','e2temp'],
        blPorts: ['servo0'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: true,
        supportsDisplay: true,
        supports12864: false,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: ['M5'],
        maxExpansionBoards: 1,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        serialRxPin:'PC7',
        serialTxPin:'PC6',
        espDataReadyPin:'A.15',
        lpcTfrReadyPin:'C.11',
        espResetPin:'B.10',
        lpc: {
            externalSDCard:{
                csPin: "NoPin",
                cardDetectPin: "NoPin",
                spiFrequencyHz: 4000000,
                spiChannel: 0,
            },
            internalSDCardSPIFrequencyHz: 25000000,
            softwareSPI:{
                pins: ["NoPin", "NoPin", "NoPin"],
            },
            lcd:{
                lcdCSPin:       "NoPin",
                lcdBeepPin:     "NoPin",
                encoderPinA:    "NoPin",
                encoderPinB:    "NoPin",
                encoderPinSw:   "NoPin",
                lcdDCPin:       "NoPin",
                panelButtonPin: "NoPin",
                spiChannel: 2, //Software SPI
            },
            diagnosticPin: "NoPin",
        },
        drives: [
            {
                diag: "F.2",
            },
            {
                diag: "C.13",
            },
            {
                diag: "E.0",
            },
            {
                diag: "G.14",
            },
            {
                diag: "G.9",
            },
            {
                diag: "D.3",
            },
            {
                diag: "I.4",
            },
            {
                diag: "F.4",
            },
            {
                diag: "F.6",
            },
            {
                diag: "I.7",
            },
            {
                diag: "F.12",
            }
        ]
    },
    {
        name: 'fly_cdy',
        caption: 'Fly-CDY',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: true,
        numDrives: 6,
        heaterPorts: ['bed', 'e0heat', 'e1heat','e2heat'],
        fanPorts: ['fan0','fan1','fan2'],
        pwmPorts: ['bed', 'e0heat', 'e1heat','e2heat','fan0','fan1','fan2'],
        gpioPorts: ['xstop','ystop','zstop', 'xstopmax','ystopmax','zstopmax'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp','e2temp'],
        blPorts: ['servo0'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: true,
        supportsDisplay: true,
        supports12864: false,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: [],
        maxExpansionBoards: 0,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        serialRxPin:'0.1',
        serialTxPin:'0.0',
        espDataReadyPin:'0.28',
        lpcTfrReadyPin:'2.7',
        espResetPin:'2.6',
        lpc: {
            externalSDCard:{
                csPin: "NoPin",
                cardDetectPin: "NoPin",
                spiFrequencyHz: 4000000,
                spiChannel: 0,
            },
            internalSDCardSPIFrequencyHz: 25000000,
            softwareSPI:{
                pins: ["NoPin", "NoPin", "NoPin"],
            },
            lcd:{
                lcdCSPin:       "NoPin",
                lcdBeepPin:     "NoPin",
                encoderPinA:    "NoPin",
                encoderPinB:    "NoPin",
                encoderPinSw:   "NoPin",
                lcdDCPin:       "NoPin",
                panelButtonPin: "NoPin",
                spiChannel: 2, //Software SPI
            },
            diagnosticPin: "NoPin",
        },
        drives: [
            {
                diag: "1.29",
            },
            {
                diag: "1.28",
            },
            {
                diag: "1.27",
            },
            {
                diag: "1.25",
            },
            {
                diag: "1.22",
            },
            {
                diag: "1.19",
            }
        ]
    },
    {
        name: 'fly_F407ZG',
        caption: 'Fly-F407ZG',
        motorWarningCurrent: 1200,
        motorLimitCurrent: 2000,
        seriesResistor: 4700,
        microstepping: true,
        microsteppingInterpolation: true,
        numDrives: 9,
        heaterPorts: ['bed', 'e0heat', 'e1heat','e2heat','e3heat','e4heat','e5heat'],
        fanPorts: ['fan0','fan1','fan2','fan3','fan4','fan5'],
        pwmPorts: ['bed', 'e0heat', 'e1heat','e2heat','e3heat','e4heat','e5heat','fan0','fan1','fan2','fan3','fan4','fan5'],
        gpioPorts: ['xstop','ystop','zstop', 'xstopmax','ystopmax','zstopmax','Z3','DLJC'],
        analogPorts: ['bedtemp', 'e0temp', 'e1temp','e2temp','e3temp','e4temp','e5temp'],
        blPorts: ['servo0'],
        spiCsPorts: [],
        hasEthernet: false,
        hasWiFi: false,
        hasESP: true,
        hasPowerFailureDetection: false,
        hasMotorLoadDetection: false,
        supportsDisplay: true,
        supports12864: false,
        firmwareFile: 'firmware.bin',
        iapFile: '',
        expansionBoards: [],
        maxExpansionBoards: 0,
        stepperDriver: "",
        stepperDriverTimings: "",
        stepperDriverSmart: true,
        serialRxPin:'A.10',
        serialTxPin:'A.9',
        espDataReadyPin:'E.15',
        lpcTfrReadyPin:'B.10',
        espResetPin:'B.2',
        lpc: {
            externalSDCard:{
                csPin: "NoPin",
                cardDetectPin: "NoPin",
                spiFrequencyHz: 4000000,
                spiChannel: 0,
            },
            internalSDCardSPIFrequencyHz: 25000000,
            softwareSPI:{
                pins: ["NoPin", "NoPin", "NoPin"],
            },
            lcd:{
                lcdCSPin:       "NoPin",
                lcdBeepPin:     "NoPin",
                encoderPinA:    "NoPin",
                encoderPinB:    "NoPin",
                encoderPinSw:   "NoPin",
                lcdDCPin:       "NoPin",
                panelButtonPin: "NoPin",
                spiChannel: 2, //Software SPI
            },
            diagnosticPin: "NoPin",
        },
        drives: [
            {
                diag: "NoPin",
            },
            {
                diag: "NoPin",
            },
            {
                diag: "NoPin",
            },
            {
                diag: "NoPin",
            },
            {
                diag: "NoPin",
            },
            {
                diag: "NoPin",
            },
            {
                 diag: "NoPin",
            },
            {
                diag: "NoPin",
            },
            {
                diag: "NoPin",
            }
            ]
        },
        {
            name: 'fly_E3',
            caption: 'Fly-E3',
            motorWarningCurrent: 1200,
            motorLimitCurrent: 2000,
            seriesResistor: 4700,
            microstepping: true,
            microsteppingInterpolation: true,
            numDrives: 4,
            heaterPorts: ['bed', 'e0heat'],
            fanPorts: ['fan0','fan1'],
            pwmPorts: ['bed', 'e0heat','fan0','fan1'],
            gpioPorts: ['xstop','ystop','zstop', 'probe'],
            analogPorts: ['bedtemp', 'e0temp'],
            blPorts: ['servo0'],
            spiCsPorts: [],
            hasEthernet: false,
            hasWiFi: false,
            hasESP: true,
            hasPowerFailureDetection: false,
            hasMotorLoadDetection: true,
            supportsDisplay: true,
            supports12864: false,
            firmwareFile: 'firmware.bin',
            iapFile: '',
            expansionBoards: [],
            maxExpansionBoards: 0,
            stepperDriver: "",
            stepperDriverTimings: "",
            stepperDriverSmart: true,
            serialRxPin:'D.9',
            serialTxPin:'D.8',
            espDataReadyPin:'E.13',
            lpcTfrReadyPin:'E.14',
            espResetPin:'E.15',
            lpc: {
                externalSDCard:{
                    csPin: "NoPin",
                    cardDetectPin: "NoPin",
                    spiFrequencyHz: 4000000,
                    spiChannel: 0,
                },
                internalSDCardSPIFrequencyHz: 25000000,
                softwareSPI:{
                    pins: ["NoPin", "NoPin", "NoPin"],
                },
                lcd:{
                    lcdCSPin:       "NoPin",
                    lcdBeepPin:     "NoPin",
                    encoderPinA:    "NoPin",
                    encoderPinB:    "NoPin",
                    encoderPinSw:   "NoPin",
                    lcdDCPin:       "NoPin",
                    panelButtonPin: "NoPin",
                    spiChannel: 2, //Software SPI
                },
                diagnosticPin: "NoPin",
            },
            drives: [
                {
                    diag: "E.6",
                },
                {
                    diag: "E.2",
                },
                {
                    diag: "D.5",
                },
                {
                    diag: "D.7",
                }
            ]
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

	isValidPin(board, pin, canAddress) {
		const pinTypes = ['heaterPorts', 'fanPorts', 'pwmPorts', 'gpioPorts', 'analogPorts', 'spiCsPorts', 'blPorts'];
		return pinTypes.some(function(pinType) {
			return board[pinType].some(function(boardPort) {
				return ((!canAddress && Template.isSamePin(pin, boardPort)) ||
						(canAddress !== undefined && Template.isSamePin(pin, `${canAddress}.${boardPort}`)));
			});
		});
	}
}
