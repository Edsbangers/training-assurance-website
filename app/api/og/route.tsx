import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Training Assurance Consultancy';
  const category = searchParams.get('category') || 'Strategic Insights';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: '#001233',
          padding: '60px',
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 140, 0, 0.1) 100%)',
          }}
        />

        {/* Category badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              backgroundColor: '#FF8C00',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: 'white',
            lineHeight: 1.2,
            marginBottom: '40px',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {/* Logo placeholder - TAC text */}
            <div
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#FF8C00',
              }}
            >
              TAC
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#B0C4DE',
              }}
            >
              Training Assurance Consultancy
            </div>
          </div>

          <div
            style={{
              fontSize: '18px',
              color: '#6b8db4',
            }}
          >
            trainingassuranceconsultancy.com
          </div>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #FF8C00, #e67e00)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
