// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: pactolus/token.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Token struct {
	Denom           string `protobuf:"bytes,1,opt,name=denom,proto3" json:"denom,omitempty"`
	Description     string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Maxsupply       uint64 `protobuf:"varint,3,opt,name=maxsupply,proto3" json:"maxsupply,omitempty"`
	Supply          uint64 `protobuf:"varint,4,opt,name=supply,proto3" json:"supply,omitempty"`
	Precision       uint32 `protobuf:"varint,5,opt,name=precision,proto3" json:"precision,omitempty"`
	Ticker          string `protobuf:"bytes,6,opt,name=ticker,proto3" json:"ticker,omitempty"`
	Url             string `protobuf:"bytes,7,opt,name=url,proto3" json:"url,omitempty"`
	CanChangeSupply bool   `protobuf:"varint,8,opt,name=canChangeSupply,proto3" json:"canChangeSupply,omitempty"`
	Owner           string `protobuf:"bytes,9,opt,name=owner,proto3" json:"owner,omitempty"`
}

func (m *Token) Reset()         { *m = Token{} }
func (m *Token) String() string { return proto.CompactTextString(m) }
func (*Token) ProtoMessage()    {}
func (*Token) Descriptor() ([]byte, []int) {
	return fileDescriptor_264e79d273336325, []int{0}
}
func (m *Token) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Token) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Token.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Token) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Token.Merge(m, src)
}
func (m *Token) XXX_Size() int {
	return m.Size()
}
func (m *Token) XXX_DiscardUnknown() {
	xxx_messageInfo_Token.DiscardUnknown(m)
}

var xxx_messageInfo_Token proto.InternalMessageInfo

func (m *Token) GetDenom() string {
	if m != nil {
		return m.Denom
	}
	return ""
}

func (m *Token) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Token) GetMaxsupply() uint64 {
	if m != nil {
		return m.Maxsupply
	}
	return 0
}

func (m *Token) GetSupply() uint64 {
	if m != nil {
		return m.Supply
	}
	return 0
}

func (m *Token) GetPrecision() uint32 {
	if m != nil {
		return m.Precision
	}
	return 0
}

func (m *Token) GetTicker() string {
	if m != nil {
		return m.Ticker
	}
	return ""
}

func (m *Token) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

func (m *Token) GetCanChangeSupply() bool {
	if m != nil {
		return m.CanChangeSupply
	}
	return false
}

func (m *Token) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func init() {
	proto.RegisterType((*Token)(nil), "clockworkgr.pactolus.pactolus.Token")
}

func init() { proto.RegisterFile("pactolus/token.proto", fileDescriptor_264e79d273336325) }

var fileDescriptor_264e79d273336325 = []byte{
	// 279 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x90, 0x31, 0x4e, 0xc3, 0x30,
	0x18, 0x85, 0x63, 0xda, 0x84, 0xc6, 0x08, 0x81, 0xac, 0x0a, 0x79, 0x00, 0x2b, 0x62, 0xca, 0x94,
	0x20, 0x71, 0x03, 0xd8, 0x18, 0x03, 0x13, 0x5b, 0xea, 0x5a, 0x69, 0x94, 0xc4, 0xb6, 0x6c, 0x47,
	0x6d, 0x6f, 0xc1, 0xb1, 0x18, 0x3b, 0x32, 0xa2, 0xe4, 0x1c, 0x48, 0xc8, 0x4e, 0x68, 0x2a, 0xb6,
	0xf7, 0xbe, 0xe7, 0xdf, 0xbf, 0xfe, 0x07, 0x97, 0x32, 0xa7, 0x46, 0xd4, 0xad, 0x4e, 0x8d, 0xa8,
	0x18, 0x4f, 0xa4, 0x12, 0x46, 0xa0, 0x3b, 0x5a, 0x0b, 0x5a, 0x6d, 0x85, 0xaa, 0x0a, 0x95, 0xfc,
	0xbd, 0x38, 0x8a, 0xfb, 0x1f, 0x00, 0xfd, 0x37, 0xfb, 0x1c, 0x2d, 0xa1, 0xbf, 0x66, 0x5c, 0x34,
	0x18, 0x44, 0x20, 0x0e, 0xb3, 0xc1, 0xa0, 0x08, 0x5e, 0xac, 0x99, 0xa6, 0xaa, 0x94, 0xa6, 0x14,
	0x1c, 0x9f, 0xb9, 0xec, 0x14, 0xa1, 0x5b, 0x18, 0x36, 0xf9, 0x4e, 0xb7, 0x52, 0xd6, 0x7b, 0x3c,
	0x8b, 0x40, 0x3c, 0xcf, 0x26, 0x80, 0x6e, 0x60, 0x30, 0x46, 0x73, 0x17, 0x8d, 0xce, 0x4e, 0x49,
	0xc5, 0x68, 0xa9, 0xed, 0xaf, 0x7e, 0x04, 0xe2, 0xcb, 0x6c, 0x02, 0x76, 0xca, 0x94, 0xb4, 0x62,
	0x0a, 0x07, 0x6e, 0xe1, 0xe8, 0xd0, 0x35, 0x9c, 0xb5, 0xaa, 0xc6, 0xe7, 0x0e, 0x5a, 0x89, 0x62,
	0x78, 0x45, 0x73, 0xfe, 0xbc, 0xc9, 0x79, 0xc1, 0x5e, 0x87, 0x45, 0x8b, 0x08, 0xc4, 0x8b, 0xec,
	0x3f, 0xb6, 0xf7, 0x89, 0x2d, 0x67, 0x0a, 0x87, 0xc3, 0x7d, 0xce, 0x3c, 0xbd, 0x7c, 0x76, 0x04,
	0x1c, 0x3a, 0x02, 0xbe, 0x3b, 0x02, 0x3e, 0x7a, 0xe2, 0x1d, 0x7a, 0xe2, 0x7d, 0xf5, 0xc4, 0x7b,
	0x7f, 0x28, 0x4a, 0xb3, 0x69, 0x57, 0x09, 0x15, 0x4d, 0x7a, 0xd2, 0x61, 0x7a, 0x6c, 0x79, 0x37,
	0x49, 0xb3, 0x97, 0x4c, 0xaf, 0x02, 0xd7, 0xf8, 0xe3, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x6d,
	0x30, 0x5d, 0x20, 0x89, 0x01, 0x00, 0x00,
}

func (m *Token) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Token) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Token) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintToken(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0x4a
	}
	if m.CanChangeSupply {
		i--
		if m.CanChangeSupply {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x40
	}
	if len(m.Url) > 0 {
		i -= len(m.Url)
		copy(dAtA[i:], m.Url)
		i = encodeVarintToken(dAtA, i, uint64(len(m.Url)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Ticker) > 0 {
		i -= len(m.Ticker)
		copy(dAtA[i:], m.Ticker)
		i = encodeVarintToken(dAtA, i, uint64(len(m.Ticker)))
		i--
		dAtA[i] = 0x32
	}
	if m.Precision != 0 {
		i = encodeVarintToken(dAtA, i, uint64(m.Precision))
		i--
		dAtA[i] = 0x28
	}
	if m.Supply != 0 {
		i = encodeVarintToken(dAtA, i, uint64(m.Supply))
		i--
		dAtA[i] = 0x20
	}
	if m.Maxsupply != 0 {
		i = encodeVarintToken(dAtA, i, uint64(m.Maxsupply))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintToken(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Denom) > 0 {
		i -= len(m.Denom)
		copy(dAtA[i:], m.Denom)
		i = encodeVarintToken(dAtA, i, uint64(len(m.Denom)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintToken(dAtA []byte, offset int, v uint64) int {
	offset -= sovToken(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Token) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Denom)
	if l > 0 {
		n += 1 + l + sovToken(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovToken(uint64(l))
	}
	if m.Maxsupply != 0 {
		n += 1 + sovToken(uint64(m.Maxsupply))
	}
	if m.Supply != 0 {
		n += 1 + sovToken(uint64(m.Supply))
	}
	if m.Precision != 0 {
		n += 1 + sovToken(uint64(m.Precision))
	}
	l = len(m.Ticker)
	if l > 0 {
		n += 1 + l + sovToken(uint64(l))
	}
	l = len(m.Url)
	if l > 0 {
		n += 1 + l + sovToken(uint64(l))
	}
	if m.CanChangeSupply {
		n += 2
	}
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovToken(uint64(l))
	}
	return n
}

func sovToken(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozToken(x uint64) (n int) {
	return sovToken(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Token) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowToken
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Token: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Token: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthToken
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthToken
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denom = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthToken
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthToken
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Maxsupply", wireType)
			}
			m.Maxsupply = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Maxsupply |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Supply", wireType)
			}
			m.Supply = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Supply |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Precision", wireType)
			}
			m.Precision = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Precision |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Ticker", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthToken
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthToken
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Ticker = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Url", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthToken
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthToken
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Url = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CanChangeSupply", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.CanChangeSupply = bool(v != 0)
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowToken
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthToken
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthToken
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipToken(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthToken
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipToken(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowToken
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowToken
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowToken
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthToken
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupToken
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthToken
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthToken        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowToken          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupToken = fmt.Errorf("proto: unexpected end of group")
)
