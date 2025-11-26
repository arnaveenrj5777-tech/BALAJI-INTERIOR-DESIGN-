var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02641554577819427,
        "pitch": 0.015219058467234703,
        "fov": 0.9773170642038893
      },
      "linkHotspots": [
        {
          "yaw": -0.4269739938950128,
          "pitch": 0.07580297053718432,
          "rotation": 4.71238898038469,
          "target": "1-living-room"
        },
        {
          "yaw": -1.2336420729770126,
          "pitch": 0.12759716560741907,
          "rotation": 1.5707963267948966,
          "target": "3-dinning-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.47677293884727234,
          "pitch": 0.1572981726270104,
          "rotation": 4.71238898038469,
          "target": "3-dinning-area"
        },
        {
          "yaw": 0.49158913709622,
          "pitch": 0.09791186847739652,
          "rotation": 1.5707963267948966,
          "target": "2-courtyard-"
        },
        {
          "yaw": 1.401534461223786,
          "pitch": 0.35747436529115006,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-courtyard-",
      "name": "COURTYARD ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8197144468674464,
          "pitch": 0.32562789157270444,
          "rotation": 0,
          "target": "3-dinning-area"
        },
        {
          "yaw": 1.0893444054591868,
          "pitch": 0.2725406432783686,
          "rotation": 4.71238898038469,
          "target": "1-living-room"
        },
        {
          "yaw": -0.26974817841307974,
          "pitch": 0.06817963562550489,
          "rotation": 0,
          "target": "0-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dinning-area",
      "name": "DINNING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6028238831640689,
          "pitch": 0.17449930067568786,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 2.125125783890634,
          "pitch": 0.235278781526862,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.14941323363290238,
          "pitch": 0.1585666322397472,
          "rotation": 0,
          "target": "2-courtyard-"
        },
        {
          "yaw": -2.891082192909167,
          "pitch": 0.10212778184204474,
          "rotation": 0,
          "target": "5-first-floor-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7794422319150893,
          "pitch": 0.22814531563050622,
          "rotation": 4.71238898038469,
          "target": "3-dinning-area"
        },
        {
          "yaw": -0.780691469520761,
          "pitch": -0.13434431024358062,
          "rotation": 0.7853981633974483,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-first-floor-living-area",
      "name": "FIRST FLOOR LIVING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5530244726064968,
          "pitch": 0.010769504859073464,
          "rotation": 3.141592653589793,
          "target": "2-courtyard-"
        },
        {
          "yaw": -0.9090904754786067,
          "pitch": 0.21153432306359932,
          "rotation": 3.141592653589793,
          "target": "3-dinning-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
