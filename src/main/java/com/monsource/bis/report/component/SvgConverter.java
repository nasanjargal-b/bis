package com.monsource.bis.report.component;

import org.apache.batik.gvt.renderer.ImageRenderer;
import org.apache.batik.transcoder.TranscoderException;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.batik.transcoder.image.JPEGTranscoder;
import org.apache.batik.transcoder.image.PNGTranscoder;
import org.springframework.stereotype.Component;

import java.awt.*;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.StringReader;

/**
 * Created by nasanjargal on 7/17/14.
 */
@Component
public class SvgConverter {

    public InputStream convertPNG(String svg) throws TranscoderException {

        if (svg == null || svg.equals("")) return null;

        TranscoderInput input = new TranscoderInput(new StringReader(svg));
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        TranscoderOutput output = new TranscoderOutput(outputStream);

        PNGTranscoder transcoder = new PNGTranscoder() {
            @Override
            protected ImageRenderer createRenderer() {
                ImageRenderer r = super.createRenderer();

                RenderingHints rh = r.getRenderingHints();

                rh.add(new RenderingHints(RenderingHints.KEY_ALPHA_INTERPOLATION,
                        RenderingHints.VALUE_ALPHA_INTERPOLATION_QUALITY));
                rh.add(new RenderingHints(RenderingHints.KEY_INTERPOLATION,
                        RenderingHints.VALUE_INTERPOLATION_BICUBIC));

                rh.add(new RenderingHints(RenderingHints.KEY_ANTIALIASING,
                        RenderingHints.VALUE_ANTIALIAS_ON));

                rh.add(new RenderingHints(RenderingHints.KEY_COLOR_RENDERING,
                        RenderingHints.VALUE_COLOR_RENDER_QUALITY));
                rh.add(new RenderingHints(RenderingHints.KEY_DITHERING,
                        RenderingHints.VALUE_DITHER_DISABLE));

                rh.add(new RenderingHints(RenderingHints.KEY_RENDERING,
                        RenderingHints.VALUE_RENDER_QUALITY));

                rh.add(new RenderingHints(RenderingHints.KEY_STROKE_CONTROL,
                        RenderingHints.VALUE_STROKE_PURE));

                rh.add(new RenderingHints(RenderingHints.KEY_FRACTIONALMETRICS,
                        RenderingHints.VALUE_FRACTIONALMETRICS_ON));
                rh.add(new RenderingHints(RenderingHints.KEY_TEXT_ANTIALIASING,
                        RenderingHints.VALUE_TEXT_ANTIALIAS_OFF));

                r.setRenderingHints(rh);

                return r;
            }
        };

        transcoder.addTranscodingHint(PNGTranscoder.KEY_BACKGROUND_COLOR, Color.WHITE);

        transcoder.transcode(input, output);

        return new ByteArrayInputStream(outputStream.toByteArray());
    }

    public InputStream convertJPG(String svg) throws TranscoderException {

        if (svg == null || svg.equals("")) return null;

        TranscoderInput input = new TranscoderInput(new StringReader(svg));
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        TranscoderOutput output = new TranscoderOutput(outputStream);

        JPEGTranscoder transcoder = new JPEGTranscoder();

        transcoder.transcode(input, output);
        transcoder.addTranscodingHint(JPEGTranscoder.KEY_QUALITY, 1.0f);

        return new ByteArrayInputStream(outputStream.toByteArray());
    }

}
