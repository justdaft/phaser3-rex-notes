import frag from './grayscale-frag.js';

const TextureTintPipeline = Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline;
const GetValue = Phaser.Utils.Objects.GetValue;

class GrayScalePipeline extends TextureTintPipeline {
    constructor(scene, key, config) {
        var game = scene.game;
        super({
            game: game,
            renderer: game.renderer,
            fragShader: frag // GLSL shader
        });
        this._intensity = 0;

        game.renderer.addPipeline(key, this);
        this.resetFromJSON(config);
    }

    resetFromJSON(o) {
        this.intensity = GetValue(o, 'intensity', 0);
        return this;
    }

    // intensity
    get intensity() {
        return this._intensity;
    }

    set intensity(value) {
        this._intensity = value;
        this.setFloat1('intensity', value);
    }

    setIntensity(value) {
        this.intensity = value;
        return this;
    }
}

export default GrayScalePipeline;