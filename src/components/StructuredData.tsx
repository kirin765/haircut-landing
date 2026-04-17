import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://noshowhair.com/#organization',
    'name': '노쇼 없는 미용실',
    'alternateName': 'NoShowHair',
    'description': '소규모 미용실을 위한 예약 운영 최적화 소프트웨어. 자동 리마인드와 디자이너별 시술시간 기록, 권장 예약 간격 제안을 제공합니다.',
    'url': 'https://noshowhair.com',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://noshowhair.com/logo.png',
      'width': 512,
      'height': 512,
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'email': 'support@reviewboost.co.kr',
      'availableLanguage': ['Korean', 'English'],
      'areaServed': 'KR',
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'South Korea',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://noshowhair.com/#website',
    'url': 'https://noshowhair.com',
    'name': '노쇼 없는 미용실',
    'description': '미용실 예약 리마인드·시술시간 기록·예약 간격 추천 도구',
    'inLanguage': 'ko-KR',
    'publisher': { '@id': 'https://noshowhair.com/#organization' },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://noshowhair.com/#webpage',
    'url': 'https://noshowhair.com',
    'name': '노쇼 없는 미용실',
    'description': '소규모 미용실용 예약 운영 최적화 랜딩페이지',
    'inLanguage': 'ko-KR',
    'isPartOf': { '@id': 'https://noshowhair.com/#website' },
    'about': [
      '미용실 예약 관리',
      '미용실 시술시간 기록',
      '예약 리마인드',
      '예약 간격 추천',
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://noshowhair.com/#software',
    'name': '노쇼 없는 미용실',
    'description': '소규모 미용실의 예약 운영 문제를 해결하는 웹 기반 소프트웨어. 자동 예약 리마인드, 실제 시술시간 기록, 디자이너별 평균 소요시간 계산, 권장 예약 간격 제안을 제공합니다.',
    'url': 'https://noshowhair.com',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web',
    'inLanguage': 'ko-KR',
    'audience': {
      '@type': 'Audience',
      'audienceType': '소규모 미용실 원장 및 운영자',
    },
    'featureList': [
      '자동 예약 리마인드 발송',
      '노쇼 및 당일 취소 관리',
      '디자이너별 실제 시술시간 기록',
      '시술별 평균시간과 편차 계산',
      '권장 예약 간격 제안',
      '밀림 위험 슬롯 표시',
    ],
    'offers': {
      '@type': 'AggregateOffer',
      'lowPrice': '0',
      'highPrice': '29000',
      'priceCurrency': 'KRW',
      'offers': [
        {
          '@type': 'Offer',
          'name': '스타터',
          'price': '0',
          'priceCurrency': 'KRW',
          'url': 'https://noshowhair.com#pricing',
        },
        {
          '@type': 'Offer',
          'name': '프로',
          'price': '19000',
          'priceCurrency': 'KRW',
          'url': 'https://noshowhair.com#pricing',
        },
        {
          '@type': 'Offer',
          'name': '팀',
          'price': '29000',
          'priceCurrency': 'KRW',
          'url': 'https://noshowhair.com#pricing',
        },
      ],
    },
    'publisher': { '@id': 'https://noshowhair.com/#organization' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': '기존 예약 시스템을 바꿔야 하나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '아니요. 기존 예약 시스템은 그대로 두고 예약 데이터와 실제 시술시간 기록을 붙여 쓰는 방식입니다.',
        },
      },
      {
        '@type': 'Question',
        'name': '미용실 노쇼 방지는 어떻게 도와주나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '예약 리마인드를 중심으로 당일 공백을 줄이고, 노쇼와 당일 취소 패턴을 함께 확인할 수 있게 합니다.',
        },
      },
      {
        '@type': 'Question',
        'name': '시술시간 기록은 어떻게 쓰나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '시술 시작과 종료 시각만 기록해도 디자이너별·메뉴별 실제 소요시간이 쌓이고 다음 예약 간격 추천에 반영됩니다.',
        },
      },
      {
        '@type': 'Question',
        'name': '추천 예약 간격은 어떻게 계산되나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '최근 5~20건의 디자이너별·시술별 실제 소요시간을 기준으로 평균과 편차를 계산해 권장값을 제안합니다.',
        },
      },
      {
        '@type': 'Question',
        'name': '어떤 미용실에 가장 잘 맞나요?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': '염색과 펌 비중이 높고, 예약 간격이 조금만 흔들려도 대기와 공실이 생기는 소규모 살롱에 가장 잘 맞습니다.',
        },
      },
    ],
  };

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />

      {/* Software Application Schema */}
      <Script
        id="app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        strategy="afterInteractive"
      />

      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />

      {/* WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
    </>
  );
}
