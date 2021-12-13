import { I3dmParser } from "../../Source/Cesium.js";
import Cesium3DTilesTester from "../Cesium3DTilesTester.js";

describe(
  "Scene/I3dmParser",
  function () {
    it("throws with undefined arrayBuffer", function () {
      expect(function () {
        I3dmParser.parse(undefined);
      }).toThrowDeveloperError();
    });

    it("throws with invalid version", function () {
      var arrayBuffer = Cesium3DTilesTester.generateInstancedTileBuffer({
        version: 2,
      });
      expect(function () {
        I3dmParser.parse(arrayBuffer);
      }).toThrowDeveloperError();
    });

    it("throws if there is no feature table json", function () {
      var arrayBuffer = Cesium3DTilesTester.generateInstancedTileBuffer({
        version: 2,
      });
      expect(function () {
        I3dmParser.parse(arrayBuffer);
      }).toThrowDeveloperError();
    });

    it("throws with invalid format", function () {
      var arrayBuffer = Cesium3DTilesTester.generateInstancedTileBuffer({
        gltfFormat: 2,
      });
    });

    it("throws with empty gltf", function () {
      var arrayBuffer = Cesium3DTilesTester.generateInstancedTileBuffer();
    });
  },
  "WebGL"
);
